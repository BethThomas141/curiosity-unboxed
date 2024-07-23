import { Card, Col, Container, Row } from "react-bootstrap";
import birthdayMysteryPhoto from "./../../images/MysteryBdayCard.JPG";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <Container className={"mt-5"}>
      <p className="text-center code-text pb-2">
        <p>
          <em>{"Received one of the cards below?"}</em>
        </p>
        <p>{"Click on it to try out your code or view hints!"}</p>
      </p>
      <Container className={"pt-4 d-flex"}>
        <Row>
          <Col xl={4} md={6} xs={12}>
            <Card
              className={"card-link"}
              onClick={() => navigate("unlock/birthday-mystery")}
            >
              <Card.Img variant="top" src={birthdayMysteryPhoto} />
              <Card.Body>
                <Card.Title>Mystery Birthday Card</Card.Title>
                <Card.Text>
                  Can you solve the birthday mystery? Click here to enter your
                  code or view hints.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home;
