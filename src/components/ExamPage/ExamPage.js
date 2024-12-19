import "../ExamPage/ExamPage.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import examData from "../../../utils/exam.js";
import QuestionCard from "../QuestionCard/QuestionCard.js";
import useShuffleArray from "../../../utils/useShuffleArray.js";

const ExamPage = () => {
  // const [shuffleResultScreen, setShuffleResultScreen] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});

  const handleAnswerSelect = (questionId, selectedAnswer) => {
    setUserAnswers({
      ...userAnswers,
      [questionId]: selectedAnswer,
    });
  };
  
  console.log(userAnswers);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(userAnswers)
    navigate("/result", { state: {shuffledExamQuestions, userAnswers } });
  };

  // const fetchQuestions = async () => {
  //   try {
  //     const response = await fetch("/exam.json");
  //     console.log("res", response);
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }
  //     const json = await response.json();
  //     console.log("Fetched data", json);
  //   } catch (error) {
  //     console.error("Error fetching exam.json:", error.message);
  //   }
  // };

  const fetchExamData = () => {
    // setArrayToShuffle(examData?.topics[0]?.segment?.children_order);
    setQuestions(examData?.topics[0].children);
  };

  useEffect(() => {
    fetchExamData();
  }, []);

  const shuffledExamQuestions = useShuffleArray(questions);
  // setShuffleResultScreen(shuffledExamQuestions);
  
  return (
    <section className="e-back-col-set">
      <form onSubmit={handleSubmit}>
        <div className="q-total-q-cont">
          {shuffledExamQuestions.map((que, index) => (
            <QuestionCard
              key={que?.id}
              qdata={que}
              count={index}
              onAnswerSelect={handleAnswerSelect}
            />
          ))}
        </div>
        <div className="e-btn-mcq-cont">
          <button
            className="e-mcq-submit-btn fs-20 f-inclusiveSans"
            type="submit"
          >
            Submit Test
          </button>
        </div>
      </form>
    </section>
  );
};

export default ExamPage;
