import CodeInputBar from "../../shared-components/CodeInputBar";
import {useEffect, useState} from "react";
import Confetti from 'react-confetti'
import {useWindowSize} from "react-use";


function SuccessMessage() {
  const [showConfetti, setShowConfetti] = useState(true)
  const { width, height } = useWindowSize()

  useEffect(() => {
    setTimeout(() => setShowConfetti(false), 4000)
  }, [showConfetti]);
  return (
    <div>
      <Confetti
        recycle={showConfetti}
        numberOfPieces={500}
 width={width}

      />
      Woo!

    </div>
  );
}

export default SuccessMessage;
