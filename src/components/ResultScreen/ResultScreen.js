import "../ResultScreen/ResultScreen.css";
import QuestionCard from "../QuestionCard/QuestionCard";
import { cloneElement, useEffect, useRef, useState } from "react";
import answerData from "../../../utils/answers.js";
import { useLocation } from "react-router";
import { useReactToPrint } from "react-to-print";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const ResultScreen = () => {
  const componentRef = useRef(null);

  const { userAnswers, shuffledExamQuestions } = useLocation().state;
  const [isGenerating, setIsGenerating] = useState(false);

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

  // const handlePrint = useReactToPrint({

  //   content: () => {
  //     const formStat = componentRef.current.cloneNode(true);
  //     const PrintElem = document.createElement("div");
  //     PrintElem.appendChild(formStat);
  //     return PrintElem;
  //   },
  // });
  const downloadPDF = async () => {
    setIsGenerating(true);

    const originalElement = document.getElementById("pdf-content");

    // wrapper div for clone
    const cloneWrapper = document.createElement("div");
    cloneWrapper.id = "r-pdf-cont-clone";
    cloneWrapper.style.position = "absolute";
    cloneWrapper.style.top = "-9999px";

    // clone the original content
    const clonedContent = originalElement.cloneNode(true);
    const header = document.createElement("div");
    header.style.textAlign = "center";
    header.style.marginBottom = "20px";
    header.innerHTML = `
    <h1 style="font-family: Arial, sans-serif; color: #333;">Solutions - Performance Summary</h1>
    <p style="font-size: 14px; color: #666;">Generated on ${new Date().toLocaleDateString()}</p>
  `;

    const logoExamBook = document.getElementById("h-head-clone-logo-32");
    const clonedLogoExam = logoExamBook.cloneNode(true);
    
    // clone the score card
    const scoreCard = document.getElementById("r-score-card-clo-true");
    const clonedScoreCard = scoreCard.cloneNode(true);
    const footerDiv = document.createElement("div");
    footerDiv.id = "footer-12-cont";
    clonedScoreCard.style.justifyContent = "center";
    clonedScoreCard.style.display = "flex";
    clonedScoreCard.style.position = "initial";
    clonedScoreCard.style.margin = "auto";

    footerDiv.appendChild(clonedScoreCard);

    cloneWrapper.appendChild(clonedLogoExam);
    cloneWrapper.appendChild(header); // parameter should be of type Node
    cloneWrapper.appendChild(clonedContent);
    cloneWrapper.appendChild(footerDiv);

    document.body.appendChild(cloneWrapper);

    try {
      // generate the PDF
      const canvas = await html2canvas(cloneWrapper, {
        scale: 3,
        useCORS: true,
        allowTaint: true,
        scrollX: 0,
        scrollY: -window.scrollY,
        // onclone: (clonedDoc) => {
        //   const clonedElement = clonedDoc.getElementById("pdf-content");
        // }
      });
      const imageData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const imageAspectRatio = canvas.width / canvas.height;
      const imageHeight = pdfWidth / imageAspectRatio; // Maintain aspect ratio

      let position = 0;
      let heightLeft = canvas.height;

      while (heightLeft > 0) {
        pdf.addImage(imageData, "PNG", 0, position, pdfWidth, imageHeight);

        heightLeft -= pdfHeight;
        if (heightLeft > 0) {
          pdf.addPage();
          position -= pdfHeight;
        }
      }
      pdf.save("Solutions.pdf");

      document.body.removeChild(cloneWrapper);
    } catch (error) {
      console.error("Error generating PDF: ", error);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  console.log(componentRef.current);

  return (
    <main className="">
      <div className=" f-inclusiveSans d-flex ali-i-c jus-c-c">
        <div className="r-result-scr-head">
          Solutions - Overall Performance Summary
        </div>
        <div className="r-download-pdf-icon">
          <button
            id="download-pdf-btn58"
            className="fs-16 f-inclusiveSans r-btn-download-pdf"
            onClick={(e) => {
              e.preventDefault();
              downloadPDF();
            }}
            disabled={isGenerating}
          >
            {isGenerating ? "Generating PDF..." : "Download Solutions PDF"}
          </button>
        </div>
      </div>
      <div id="pdf-content">
        <div className="q-total-q-cont">
          {shuffledExamQuestions.map((que, index) => (
            <div key={que?.id} className="question-card">
              <QuestionCard
                qdata={que}
                count={index}
                userAnswers={userAnswers[que.id]}
                corrAnswers={correctAnswers} 
                isResultScreen={true}
                setMarks={false}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="r-result-cont-a-s">
        <div
          className="r-scr-resu-cont"
          style={{ backgroundColor }}
          id="r-score-card-clo-true"
        >
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
