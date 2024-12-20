import "../ResultScreen/ResultScreen.css";
import QuestionCard from "../QuestionCard/QuestionCard";
import { useEffect, useState } from "react";
import answerData from "../../../utils/answers.js";
import { useLocation } from "react-router";

const ResultScreen = () => {
  const {userAnswers, shuffledExamQuestions} = useLocation().state;
  console.log("user answers", userAnswers);

  // for matching and comparing answers
  const [answers, setAnswers] = useState([]);
  console.log(answers);

  const fetchAnswersData = () => {
    setAnswers(answerData?.topics[0]?.children || []);
  };
  useEffect(() => {
    fetchAnswersData();
  }, []);

  const ansKey = answers.map((ans) => ans.question_segment_attributes.teacher_json.segment_data);
  console.log("Answer key", ansKey);

  const corrOpt = ansKey.map((item) => item.options.filter((correct) => correct.checked === true));
  console.log(corrOpt);
  


  const selectedOptions = Object.entries(userAnswers).map((optId) => optId[1]);
  console.log("user selected options", selectedOptions);


  const correctAnswers = corrOpt.map((item) => item[0].id)
  console.log("correct Answers", correctAnswers);
   
  
  const getCorrectAnswers = (userSelectedOptions, correctAnswersIds) => {
    return userSelectedOptions.map((userOptions) => (
      {
        id: userOptions,
        isCorrect: correctAnswersIds.includes(userOptions),
      }
    ));

  };
  const matchedAnswers = getCorrectAnswers(selectedOptions, correctAnswers);
  console.log("Matched Answers:", matchedAnswers);

 
  
  
  return (
    <main className="">
      <div className="r-result-scr-head f-inclusiveSans">
          <div>Solutions - Overall Performance Summary</div>
      </div>
      <form>
        <div className="q-total-q-cont">
          {shuffledExamQuestions.map((que, index) => (
            <QuestionCard
              key={que?.id}
              qdata={que}
              count={index}
              userAnswers={userAnswers[que.id]}
              optionId={matchedAnswers} // correct it 
              isResultScreen = {true}
              setMarks = {false}
            />
          ))}
        </div>
      </form>
    </main>
  );
};

export default ResultScreen;
