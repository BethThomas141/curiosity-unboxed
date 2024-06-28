import { useState } from "react";
import { Button, Col, Fade, Row } from "react-bootstrap";
import ImageModal from "./ImageModal";

const HiddenStep = ({ buttonText, step }) => {
  const [showHint, setShowHint] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <Row className={"align-items-center"}>
      {showModal && (
        <ImageModal image={step.image} setShowModal={setShowModal} />
      )}
      <Col xs lg="3">
        <Button
          className={"w-100 outline-button question-on-hover"}
          variant="outline-info"
          onClick={() => setShowHint(!showHint)}
        >{`${showHint ? "Hide" : "Reveal"} ${buttonText}`}</Button>
      </Col>
      <Col
        style={{
          borderLeftStyle: "solid",
          borderLeftWidth: "1px",
          borderLeftColor: "lightgray",
        }}
      >
        <div>
          <Fade in={showHint}>
            <p className={"mb-0"}>
              {step.text}{" "}
              {step.image && (
                <Button
                  variant={"link"}
                  className={"p-0 mb-1 mx-1"}
                  onClick={() => setShowModal(true)}
                >
                  Show image
                </Button>
              )}
            </p>
          </Fade>
        </div>
      </Col>
    </Row>
  );
};

export default HiddenStep;
