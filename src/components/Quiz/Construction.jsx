import { useState } from "react";
import "./Quiz.scss";
import { easeInOut, motion } from 'framer-motion';
import { sectionInfo, resultInitialState } from "../../construction";

const getSectionStatus = (sectionKey, sectionScores, numQuestions) => {
  const scoresArray = Array.isArray(sectionScores) ? sectionScores : [sectionScores];
  const totalScore = scoresArray.reduce((acc, score) => acc + score, 0);
  const percentage = (totalScore / (10 * numQuestions)) * 100;
  console.log("Total Score",totalScore,"\tQuestions:",numQuestions,"\tPercentage:",percentage);
  if (percentage >= 98) {
    return "SUPREME";
  } else if (percentage >= 90 && percentage <= 97) {
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

const ConstructionQuiz = ({ questions }) => {
  if (!questions || questions.length === 0) {
    // Handle the case when questions are not available
    return <div>No questions available</div>;
  }

  const [currentSection, setCurrentSection] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [sectionQuestion, setSectionQuestion] = useState(0);
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
    if (currentQuestion + 1 >= questions.length) {
      const currentSectionKey = `section${currentSection}`;
    const currentResult = [...result[currentSectionKey]]; // Create a copy of the array
    currentResult[sectionQuestion] = answer; // Set the score for the current question
    setResult((prev) => ({
      ...prev,
      [currentSectionKey]: currentResult,
    }));
      const totalScore = Object.values(result).reduce((acc, sectionScores) => {
        // Ensure sectionScores is an array
        const scoresArray = Array.isArray(sectionScores) ? sectionScores : [sectionScores];
        return acc + scoresArray.reduce((sum, score) => sum + score, 0);
      }, 0);
      setResult((prev) => ({ ...prev, total: totalScore }));

      setShowResult(true);
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  
    const currentSectionKey = `section${currentSection}`;
    const currentResult = [...result[currentSectionKey]]; // Create a copy of the array
    currentResult[sectionQuestion] = answer; // Set the score for the current question
    setResult((prev) => ({
      ...prev,
      [currentSectionKey]: currentResult,
    }));
  
    if (sectionQuestion + 1 < sectionLength) {
      setSectionQuestion((prev) => prev + 1);
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
        setSectionQuestion(0);
      }
    }
  };
    
  

  const onClickPrev = () => {
    setAnswerIdx(null);
    setSectionQuestion((prev) => prev - 1);
    setCurrentQuestion((prev) => prev - 1);

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
            {`${sectionInfo[sectionKey].heading} Status :     ${getSectionStatus(sectionKey, result[sectionKey], sectionInfo[sectionKey].numQuestions)}`}
          </div>
        ))}
        <div className="Total-Score">Total Status: {getSectionStatus("total", result.total, questions.length)}</div>
        <motion.button whileHover={{ scale: 1.25 }} className="csv" onClick={downloadCSV}>Download CSV</motion.button>
      </div>
    );
  };

  return (
    <div className="quiz-container">
      {!showResult ? (
        <>
          <h2 className="section-heading"> {sectionInfo[`section${currentSection}`].heading}</h2>
          <span className="active-question-no">{sectionQuestion + 1}</span>
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
            {(sectionQuestion === 0) ? null : <button onClick={onClickPrev} id='Prev_button'>
              Back
            </button>}
            <button onClick={onClickNext} disabled={answerIdx === null} id="Next_button">
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

export default ConstructionQuiz;
