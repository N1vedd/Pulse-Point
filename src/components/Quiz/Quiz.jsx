import { useState } from "react";
import "./Quiz.scss";
import { Qn } from "../../constants";
import {easeInOut, motion} from 'framer-motion';
const Quiz = ({questions}) => {
    
    if (!questions || questions.length === 0) {
        // Handle the case when questions are not available
        return <div>No questions available</div>;
    }
    const [currentQuestion,setCurrentQuestion] = useState(0);
    
    const [answerIdx,setAnswerIdx] = useState(null);
    
    const [answer,setAnswer] = useState(null);

    const [result,setResult] = useState(0);
    
    const {question,choices,scores} = questions[currentQuestion];
    
    const [showResult,setShowResult] = useState(false);
    
    const onAnswerClick = (index) => {
        setAnswerIdx(index);
        setAnswer(scores[index])

    }

    const onClickNext=()=>{
        setAnswerIdx(null);
        setResult((prev)=>prev+answer);      ;
        

        if (currentQuestion!==questions.length-1){
            setCurrentQuestion((prev)=>prev+1);
        }else{
            setCurrentQuestion(0);
            setShowResult(true);
        }
    }
    
    return (
    <div
     className="quiz-container" 
     >
        {!showResult?(<>
        <span className="active-question-no">{currentQuestion+1}</span>
        <span className="total Question">/{questions.length}</span>
        <h2>{question}</h2>
        <ul>
            {
                choices.map((ans,index)=>(

                    <li onClick={()=> onAnswerClick(index)}
                        key={ans}
                        className={answerIdx === index ? 'selected-answer':null}>
                                    {ans}
                    </li>
                ))
            }
        </ul>
        <div className="footer">
            <button onClick={onClickNext} disabled={answerIdx===null}>
                {currentQuestion===question.length-1?"Complete Assessment":"Next"}
            </button>
        </div>
        </>):
        <div className="Result">
            <h3>Result</h3>
            <div className="Score">Total Score:{result}
            </div> 
            </div>
        }
        <motion.div className='slide-in'
        initial={{scaleX:0}}
        animate={{scaleX:0}}
        exit={{scaleX:1}}
        transition={{duration:0.4,easeInOut}}
        />
        <motion.div className='slide-out'
        initial={{scaleX:1}}
        animate={{scaleX:0}}
        exit={{scaleX:0}}
        transition={{duration:0.4,easeInOut}}
        />    
        </div>
        );
    
}

export default Quiz;