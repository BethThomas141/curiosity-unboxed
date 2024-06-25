import CodeInputBar from "../../shared-components/CodeInputBar";
import HintSection from "./HintSection";
import {birthdayMysteryHints, failMessage, inputHeading} from "../../text/EditableText";


function MainPage({ setShowSuccess }) {

  return (
    <div className={"py-5"}>
      <CodeInputBar setShowSuccess={setShowSuccess} inputHeading={inputHeading} failMessage={failMessage}/>
       <HintSection hints={birthdayMysteryHints} />
    </div>
  );
}

export default MainPage;
