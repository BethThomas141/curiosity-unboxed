import CodeInputBar from "../../shared-components/CodeInputBar";
import {useState} from "react";
import SuccessMessage from "./SuccessMessage";
import CardWithArrow from "../../shared-components/CardWithArrow";

function BirthdayMystery() {
  const [showSuccess, setShowSuccess] = useState(false)
  return (
    <div className="App">
      <header className="App-header">

        <p>Home</p>
        {showSuccess ? <SuccessMessage /> :  <CodeInputBar setShowSuccess={setShowSuccess} />}
        <CardWithArrow title={"HEllo"} >
          Hello
        </CardWithArrow>
      </header>
    </div>
  );
}

export default BirthdayMystery;
