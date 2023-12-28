
import { useState } from "react";
import "./Quiz.scss";
import { easeInOut, motion } from 'framer-motion';
import { sectionInfo,resultInitialState } from "../../manufacturing";


const getSectionStatus = (sectionKey, sectionScore, numQuestions) => {
  const percentage = (sectionScore / (10 * numQuestions)) * 100;

  if (percentage === 100) {
    return "SUPREME";
  } else if (percentage >= 90 && percentage <= 99) {
    return "HEALTHY";
  } else if (percentage >= 80 && percentage <= 89) {
    return "INFECTED";
  } else if (percentage >= 70 && percentage <= 79) {
    return "SERIOUS";
  } else if (percentage >= 60 && percentage <= 69) {
    return "CRITICAL";
  } else {
    return "COMA";
  }
};

const ManufacturingQuiz = ({ questions }) => {
  if (!questions || questions.length === 0) {
    // Handle the case when questions are not available
    return <div>No questions available</div>;
  }

  const [currentSection, setCurrentSection] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState(resultInitialState);
  const [showResult, setShowResult] = useState(false);
  const sectionLength = sectionInfo[`section${currentSection}`]?.numQuestions || 0;

  const { question, choices, scores } = questions[currentQuestion];

  const onAnswerClick = (index) => {
    setAnswerIdx(index);
    setAnswer(scores[index]);
  };

  const onClickNext = () => {
    setAnswerIdx(null);

    const currentSectionKey = `section${currentSection}`;
    const currentResult = result[currentSectionKey] || 0;

    setResult((prev) => ({
      ...prev,
      [currentSectionKey]: currentResult + answer,
      total: prev.total + answer,
    }));

    if (currentQuestion + 1 < sectionLength) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      // If at the end of the current section, move to the next section
      const sectionKeys = Object.keys(sectionInfo);
      const currentSectionIndex = sectionKeys.indexOf(currentSectionKey);
      const nextSectionIndex = (currentSectionIndex + 1) % sectionKeys.length;
      const nextSectionKey = sectionKeys[nextSectionIndex];

      setCurrentSection(Number(nextSectionKey.replace("section", "")));

      if (nextSectionIndex === 0) {
        // If this is the first section, show the result
        setShowResult(true);
      } else {
        // Reset the current question for the new section
        setCurrentQuestion(0);
      }
    }
  };

  const downloadCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8," +
      "Question,Answer\n" +
      questions.map((q, index) => `"${q.question}","${q.choices[q.scores.indexOf(answer)]}"`).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "question_answers.csv");
    document.body.appendChild(link);
    link.click();
  };

  const Result = () => {
    const sectionKeys = Object.keys(sectionInfo);
  
    return (
      <div className="Result">
        <h3 className="result-heading">Result</h3>
        {sectionKeys.map((sectionKey, index) => (
          <div key={sectionKey} className="Status">
            {`${sectionInfo[sectionKey].heading} Status: ${getSectionStatus(sectionKey, result[sectionKey], sectionInfo[sectionKey].numQuestions)}`}
          </div>
        ))}
        <div className="Total-Score">Total Status: {getSectionStatus("total", result.total, questions.length)}</div>
        <motion.button whileHover={{scale:1.25}}className="csv" onClick={downloadCSV}>Download CSV</motion.button>
      </div>
    );
  };

  return (
    <div className="quiz-container">
      {!showResult ? (
        <>
          <h2 className="section-heading"> {sectionInfo[`section${currentSection}`].heading}</h2>
          <span className="active-question-no">{currentQuestion + 1}</span>
          <span className="total-question">{`/${sectionLength}`}</span>
          <h2>{question}</h2>
          <ul>
            {choices.map((ans, index) => (
              <li
                onClick={() => onAnswerClick(index)}
                key={ans}
                className={answerIdx === index ? 'selected-answer' : null}
              >
                {ans}
              </li>
            ))}
          </ul>
          <div className="footer">
            <button onClick={onClickNext} disabled={answerIdx === null}>
              {currentQuestion === sectionLength - 1 ? "Next Section" : "Next"}
            </button>
          </div>
        </>
      ) : (
        <Result />
      )}
      <motion.div
        className="slide-in"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 0.4, easeInOut }}
      />
      <motion.div
        className="slide-out"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 0.4, easeInOut }}
      />
    </div>
  );
};

export default ManufacturingQuiz;