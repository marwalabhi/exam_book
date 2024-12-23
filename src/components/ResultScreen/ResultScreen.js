import "../ResultScreen/ResultScreen.css";
import QuestionCard from "../QuestionCard/QuestionCard";
import { useEffect, useState } from "react";
import answerData from "../../../utils/answers.js";
import { useLocation } from "react-router";

const ResultScreen = () => {
  const { userAnswers, shuffledExamQuestions } = useLocation().state;

  // for matching and comparing answers
  const [answers, setAnswers] = useState([]);

  const fetchAnswersData = () => {
    setAnswers(answerData?.topics[0]?.children || []);
  };
  useEffect(() => {
    fetchAnswersData();
  }, []);

  const ansKey = answers.map(
    (ans) => ans?.question_segment_attributes?.teacher_json?.segment_data
  );

  const corrOpt = ansKey.map((item) =>
    item.options.filter((correct) => correct.checked === true)
  );
  const correctAnswers = corrOpt.map((item) => item[0].id);


  
  const selectedOptions = Object.entries(userAnswers).map((optId) => optId[1]);
  const getCorrectAnswers = (userSelectedOptions, correctAnswersIds) => {
    return userSelectedOptions.map((userOptions) => ({
      id: userOptions,
      isCorrect: correctAnswersIds.includes(userOptions),
    }));
  };
  const matchedAnswers = getCorrectAnswers(selectedOptions, correctAnswers);

  const countCorrect = matchedAnswers.filter((ans) => ans?.isCorrect).length;
  const countInCorrect = matchedAnswers.filter(
    (ans) => ans?.isCorrect === false
  ).length;
  const totalQ = correctAnswers.length;
  const attemptedQ = countCorrect + countInCorrect;

  const calculateResult = (countCorrect) => {
    const percentage = (countCorrect / totalQ) * 100;
    if (percentage >= 60) {
      return { result: "PASS", color: "green", backgroundColor: "#eefef0" };
    } else {
      return { result: "FAIL", color: "red", backgroundColor: "#fff0f1" };
    }
  };
  const { result, color, backgroundColor } = calculateResult(countCorrect);

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
              corrAnswers={correctAnswers} // correct it
              isResultScreen={true}
              setMarks={false}
            />
          ))}
        </div>
      </form>
      <div className="r-result-cont-a-s">
        <div className="r-scr-resu-cont" style={{ backgroundColor }}>
          <div className="r-score-cont f-inter fs-20">
            <span>
              Score: {countCorrect}/{totalQ}
            </span>
          </div>
          <div className="r-result-declare-cont f-inter">
            <span className="r-pass-fail-p" style={{ color }}>
              {result}
            </span>
          </div>
          <div className="r-attempt-q f-inter fs-20">
            <span>Attempted: </span>
            <span>
              {attemptedQ}/{totalQ}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ResultScreen;
