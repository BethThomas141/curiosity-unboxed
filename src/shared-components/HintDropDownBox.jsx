import { useState } from "react";
import { ChevronUp } from "react-bootstrap-icons";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Collapse,
  Stack,
} from "react-bootstrap";
import HiddenStep from "./HiddenStep";

const HintDropDownBox = ({ title, steps, solution }) => {
  const [showCard, setShowCard] = useState(false);

  return (
    <Card>
      <CardHeader
        as="h5"
        className="card-heading d-flex"
        onClick={() => setShowCard(!showCard)}
      >
        <Col className={"align-items-center mb-0"} xs={10}>
          <h5 className="mb-0">{title}</h5>
        </Col>
        <Col className={"d-flex justify-content-end align-items-center "}>
          <ChevronUp
            className={`float-end ${showCard ? "show-icon" : "hide-icon"} `}
          />
        </Col>
      </CardHeader>
      <Collapse in={showCard}>
        <div className="m-0 p-0">
          <CardBody>
            <Stack gap={3} className={"d-flex"}>
              {steps.map((step, index) => (
                <HiddenStep buttonText={`step ${index + 1}`} step={step} />
              ))}
              {solution && (
                <HiddenStep buttonText={"solution"} step={solution} />
              )}
            </Stack>
          </CardBody>
        </div>
      </Collapse>
    </Card>
  );
};

export default HintDropDownBox;
