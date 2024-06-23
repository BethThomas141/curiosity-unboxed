import {Button, Col, Container, Form, Nav, Navbar, Row} from "react-bootstrap";
import {useState} from "react";

function CodeInputBar({ setShowSuccess }) {
  const [inputtedCode, setInputtedCode] = useState('');

  const handleChange = (e) => {
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
    } else {
      console.log('oh no!')
    }
  };



  return (
    <Container className={"d-flex justify-content-center "}>
      <div className="code-input-wrapper">
        <p className="text-center">When you think you've got the code,
          Enter your four digits below.</p>

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
