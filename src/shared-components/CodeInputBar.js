import { Alert, Button, Form, Row } from "react-bootstrap";
import { useState } from "react";

function CodeInputBar({ setShowSuccess, inputHeading, failMessage }) {
  const [inputtedCode, setInputtedCode] = useState("");
  const [incorrect, setIncorrect] = useState(false);

  const handleChange = (e) => {
    setIncorrect(false);
    const value = e.target.value.replace(/[^0-9]/g, "");
    if (e.target.value.length <= 4) {
      setInputtedCode(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputtedCode === "6295") {
      setShowSuccess(true);
    } else {
      setIncorrect(true);
    }
  };

  return (
    <div className={"d-flex justify-content-center px-0"}>
      <div className="code-input-wrapper px-0">
        <p className="text-center code-text pb-2">
          <em>{inputHeading}</em>
        </p>
        {incorrect && (
          <Alert className={"mx-0"} variant={"danger"}>
            {failMessage}
          </Alert>
        )}
        <Form onSubmit={handleSubmit}>
          <Row className="pb-4 mx-0">
            <Form.Control
              type={"number"}
              className={"code-input"}
              onChange={handleChange}
              value={inputtedCode}
            />
          </Row>
          <Row className={"d-flex justify-content-center mx-0"}>
            <Button
              variant="primary"
              type="submit"
              className={"submit-button purple-button px-4"}
            >
              Submit
            </Button>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default CodeInputBar;
