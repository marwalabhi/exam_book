import "../ResultScreen/ResultScreen.css";
import QuestionCard from "../QuestionCard/QuestionCard";
import { useEffect, useState } from "react";
import answerData from "../../../utils/answers.js";
import { useLocation } from "react-router";

const ResultScreen = () => {
  const {userAnswers, shuffledExamQuestions} = useLocation().state;
   
  // console.log(userAnswers);
  
  const [answers, setAnswers] = useState([]);

  const fetchAnswersData = () => {
    setAnswers(answerData?.topics[0]?.children);
  };
  useEffect(() => {
    fetchAnswersData();
  }, []);
  const selectedOptions = Object.entries(userAnswers).map((optId) => optId[1]);
  // const getCorrectAnswers = (questionId) => {
  //   return 
  // };
  

  return (
    <main className="">
      <div className="r-result-scr-head f-inclusiveSans">
          <div>Solutions</div>
      </div>
      <form>
        <div className="q-total-q-cont">
          {shuffledExamQuestions.map((ans, index) => (
            <QuestionCard
              key={ans?.id}
              qdata={ans}
              count={index}
              userAnswers={userAnswers[ans.id]}
              correctAnswers={getCorrectAnswers(ans.id)}
            />
          ))}
        </div>
      </form>
    </main>
  );
};

export default ResultScreen;
