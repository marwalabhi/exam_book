import "../ExamPage/ExamPage.css";
import { useState, useEffect } from "react";

import examData from "../../../utils/exam.js";
import QuestionCard from "../QuestionCard/QuestionCard.js";

const ExamPage = () => {
  const [data, setData] = useState([]);
  const [questions, setQuestions] = useState([]);

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
    setData(examData);
    setQuestions(examData?.topics[0].children);
  };
  useEffect(() => {
    fetchExamData();
  }, []);

  console.log(data);
  console.log(questions);

  return (
    <section className="e-back-col-set">
      <div className="">
        {questions.map((que, index) => (
          <QuestionCard key={que?.id} qdata={que} count={index} />
        ))}
      </div>
      <div className="e-btn-mcq-cont">
        <button className="e-mcq-submit-btn fs-20 f-inclusiveSans" type="submit">
          Submit Test
        </button>
      </div>
    </section>
  );
};

export default ExamPage;
