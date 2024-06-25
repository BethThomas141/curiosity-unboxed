import { useState } from "react";
import SuccessPage from "./SuccessPage";
import MainPage from "./MainPage";

function BirthdayMystery() {
  const [showSuccess, setShowSuccess] = useState(false);
  return (
    <div className={"py-3"}>
      {showSuccess ? (
        <SuccessPage onBack={() => setShowSuccess(false)} />
      ) : (
        <MainPage setShowSuccess={setShowSuccess} />
      )}
    </div>
  );
}

export default BirthdayMystery;
