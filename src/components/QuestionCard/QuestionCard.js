import "../QuestionCard/QuestionCard.css";

const QuestionCard = ({ qdata, count }) => {
  const { points, question_segment_attributes } = qdata;
  const { options } = question_segment_attributes?.student_json?.segment_data;

  return (
    <div className="q-ques-cont">
      <div className="q-ques-lable fs-16 d-flex">
        <div className="q-indi-que-cont">
          <div className="q-que-content-h3">
            <span className="q-que-number-set">Question. {count + 1}</span>
            <span className="q-que-hin-eng">
              {question_segment_attributes?.content.replace(/<\/?p>/g, "")}
            </span>
          </div>
          <ul className="q-mcq-cont-s">
            {options.map((opt) => (
              <li className="q-indi-option-fa" key={opt?.id}>
                <label htmlFor="option" className="q-label-set-font">
                  <input
                    type="radio"
                    id="option"
                    name="mcqOption"
                    className="q-mcq-input-rad"
                    // checked={opt?.checked}
                  />
                  <div className="q-option-mcq-1">
                    {opt?.content.replace(/<\/?p>/g, "")}
                  </div>
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="q-marks-each-que f-inter">
          <span>{Math.round(points)}</span>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
