import {Alert, Button, Col, Container, Form, Nav, Navbar, Row} from "react-bootstrap";
import {useState} from "react";

function CodeInputBar({ setShowSuccess }) {
  const [inputtedCode, setInputtedCode] = useState('');
  const [incorrect, setIncorrect] = useState(false);

  const handleChange = (e) => {
    setIncorrect(false)
    const value = e.target.value.replace(/[^0-9]/g, '');
    if (e.target.value.length <= 4) {
      setInputtedCode(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputtedCode === '1234') {
      setShowSuccess(true)
      console.log('yay')
    }

    else {
      setIncorrect(true)
    }
  };



  return (
    <Container className={"d-flex justify-content-center "}>
      <div className="code-input-wrapper">
        <p className="text-center code-text pb-2"><em>When you think you've got the code,
          enter your four digits below:</em></p>
        {incorrect && <Alert variant={"danger"}>Oops, that's not quite right! Try again</Alert> }

        <Form className="mw-100" onSubmit={handleSubmit}>
          <Row className="pb-4"><Form.Control type={"number"}
                                              className={"code-input"} onChange={handleChange}
                                              value={inputtedCode}/></Row>
          <Row className={"d-flex justify-content-center "}> <Button variant="primary" type="submit"
                                                                     className={"submit-button px-4"}>
            Submit
          </Button> </Row>
        </Form>
      </div>
    </Container>
  );
}

export default CodeInputBar;
