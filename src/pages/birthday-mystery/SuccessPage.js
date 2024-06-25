import CodeInputBar from "../../shared-components/CodeInputBar";
import {useEffect, useState} from "react";
import Confetti from 'react-confetti'
import {useWindowSize} from "react-use";
import {successMessage} from "../../text/EditableText";
import {Button, Container} from "react-bootstrap";
import {ChevronLeft} from "react-bootstrap-icons";


function SuccessPage({ onBack }) {
  const [showConfetti, setShowConfetti] = useState(true)
  const { width, height } = useWindowSize()

  useEffect(() => {
    setTimeout(() => setShowConfetti(false), 4000)
  }, [showConfetti]);
  return (
    <div >
      <Confetti
        recycle={showConfetti}
        numberOfPieces={500}
 width={width}

      />
<Button className={"d-flex justify-content-center align-items-center purple-button"} onClick={onBack}><ChevronLeft/> Back</Button>
      <div className={"congrats-text text-center pt-3"}>{("Congratulations!").split("").map((letter) => <span className={"congrats-letter"}>{letter}</span>)} 🎉</div>
      <Container className={"d-flex justify-content-center"}>
        <div className={"success-message-container"}>{successMessage.split('\n').map((line, index) => (
        line === "br" ? <div key={index} style={{height: '20px'}}/> : <p className={"text-center mb-2"} key={index}>{line}</p>
      ))}</div>
      </Container>

    </div>
  );
}

export default SuccessPage;
