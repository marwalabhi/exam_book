import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
const Test = () => {
    const componentRef = useRef(null);
  
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });

    return (
      <div>
        <div>
          <button onClick={handlePrint}>Download Simple PDF</button>
        </div>
        <div ref={componentRef} style={{ padding: "20px", border: "1px solid black" }}>
          <h1>Test Printable Content</h1>
          <p>This is a simple test to check if PDF download works.</p>
        </div>
      </div>
    );
  };
  
  export default Test;
  