import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // let steps = 3;
  let [step, setStep] = useState(1);
  let [isOpen, setIsOpen] = useState(true);

  function previousHandler() {
    if (step > 1) setStep((currentStep) => currentStep - 1);
  }

  function nextHandler() {
    if (step < 3) setStep((currentStep) => currentStep + 1);
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={previousHandler}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={nextHandler}
            >
              Next
            </button>
          </div>
        </div>
      )}
      ;
    </>
  );
}
