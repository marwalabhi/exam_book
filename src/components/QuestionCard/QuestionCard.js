import "../QuestionCard/QuestionCard.css";
import { useState } from "react";

const QuestionCard = ({
  qdata,
  count,
  onAnswerSelect,
  isResultScreen,
  corrAnswers,
  userAnswers,
  setMarks,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const { points, question_segment_attributes } = qdata;
  const { options } = question_segment_attributes?.student_json?.segment_data;

  // const shuffledOptions = useShuffleArray(options);

  const handleAnswerChange = (evt) => {
    setSelectedAnswer(evt.target.value);
    onAnswerSelect(qdata.id, evt.target.value);
  };

  return (
    <div className="q-ques-cont ">
      <div className="q-ques-lable fs-16 d-flex f-inter">
        <div className="q-indi-que-cont">
          <div className="q-que-content-h3">
            <span className="q-que-number-set">
              Question. {count + 1}
              <div className="q-hr-line-w"></div>
            </span>
            <div
              htmlFor={qdata?.id}
              className="q-que-hin-eng"
              dangerouslySetInnerHTML={{
                __html: question_segment_attributes?.content,
              }}
            />
          </div>
          {/* Options */}
          <ul className="q-mcq-cont-s">
            {options.map((opt) => {
              const isSelected = userAnswers === opt.id; 
              const isCorrect = isResultScreen && corrAnswers.some((ansRow) => ansRow.includes(opt.id));

              return (
                <li
                  className={`q-indi-option-fa ${ 
                    isCorrect
                      ? "correct-answer"
                      : isSelected && !isCorrect
                      ? "wrong-answer"
                      : ""
                  } `}
                  key={opt?.id}
                >
                  <label htmlFor={opt?.id} className="q-label-set-font">
                    <input
                      type="radio"
                      id={opt?.id}
                      className="q-mcq-input-rad"
                      name={question_segment_attributes?.segment_id}
                      value={opt?.id}
                      checked={selectedAnswer === opt.id}
                      onChange={handleAnswerChange}
                      disabled={isResultScreen}
                      readOnly
                    />
                    <div
                      className="q-option-mcq-1"
                      dangerouslySetInnerHTML={{
                        __html: opt?.content,
                      }}
                    />
                    {/* {opt?.content.replace(/<\/?p>/g, "")} */}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
        {setMarks && (
          <div className="q-marks-each-que f-inter">
            <span>{Math.round(points)} marks</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
