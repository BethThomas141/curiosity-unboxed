
import { useState } from "react";
import {ChevronDown, ChevronUp} from "react-bootstrap-icons";
import {Col, Collapse, Row} from "react-bootstrap";

const CardWithArrow = ({ title, children }) => {
  const [showCard, setShowCard] = useState(true);

  return (
    <div
      className={"d-flex align-items-start px-4 pt-3 bg-white " +
        (showCard ? "pb-3 " : "") +
        "grey-border rounded-3"}
    >
      <div
        className="w-auto action-header"
        style={{padding: "16px", margin: "-16px"}}
        onClick={() => setShowCard(!showCard)}
      >
          <Row className={"d-flex flex-row mb-3"}>
            <Col>
              <strong style={{fontSize: "16px"}}>{title}</strong>
            </Col>
            <Col className={"justify-content-end"}>
                {showCard ? (
                  <ChevronUp/>
                ) : (
                  <ChevronDown/>
                )}
            </Col>
          </Row>
      </div>
      {/*<Collapse in={showCard}>*/}
      {/*  <div className={"p-0 m-0"}>        <Row>*/}
      {/*    Hello</Row></div>*/}
      {/*</Collapse>*/}
    </div>

  )
    ;
};

export default CardWithArrow;
