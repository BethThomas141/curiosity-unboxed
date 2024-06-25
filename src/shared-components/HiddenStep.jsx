import { useState } from "react";
import { Button, Col, Fade, Row } from "react-bootstrap";

const HiddenStep = ({ index, hint }) => {
  const [showHint, setShowHint] = useState(false);

  return (
    <Row className={"align-items-center"}>
      <Col xs lg="3">
        <Button
          className={"w-100 outline-button"}
          variant="outline-info"
          onClick={() => setShowHint(!showHint)}
        >{`${showHint ? "Hide" : "Reveal"} step ${index}`}</Button>
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
            <p className={"mb-0"}> {hint}</p>
          </Fade>
        </div>
      </Col>
    </Row>
  );
};

export default HiddenStep;
