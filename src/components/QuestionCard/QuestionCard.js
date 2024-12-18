import "../QuestionCard/QuestionCard.css";
import { dangerouslySetInnerHTML } from "react";

const QuestionCard = ({ qdata, count }) => {
  const { points, question_segment_attributes } = qdata;
  const { options } = question_segment_attributes?.student_json?.segment_data;

  return (
    <div className="q-ques-cont">
      <div className="q-ques-lable fs-16 d-flex f-inter">
        <div className="q-indi-que-cont">
          <div className="q-que-content-h3">
            <span className="q-que-number-set">
              Question. {count + 1}
              <div className="q-hr-line-w"></div>
            </span>
            <div
              className="q-que-hin-eng"
              dangerouslySetInnerHTML={{
                __html: question_segment_attributes?.content,
              }}
            />
          </div>

          <ul className="q-mcq-cont-s">
            {options.map((opt) => (
              <li className="q-indi-option-fa" key={opt?.id}>
                <label htmlFor={opt?.id} className="q-label-set-font">
                  <input
                    type="radio"
                    id={opt?.id}
                    name="mcqOption"
                    className="q-mcq-input-rad"
                    // checked={opt?.checked}
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
            ))}
          </ul>
        </div>
        <div className="q-marks-each-que f-inter">
          <span>{Math.round(points)} marks</span>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
