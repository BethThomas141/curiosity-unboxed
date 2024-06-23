
import { useState } from "react";
import {CardHeading, ChevronDown, ChevronUp} from "react-bootstrap-icons";
import {Button, Card, CardBody, CardHeader, Col, Collapse, Row} from "react-bootstrap";

const CardWithArrow = ({ title, children }) => {
  const [showCard, setShowCard] = useState(true);

  return (
    <Card>
      <CardHeader as="h5" className="card-heading d-flex" onClick={() => setShowCard(!showCard)}>
        <Col>
          <h5>Featured</h5>
        </Col>
<Col style={{display: 'flex'}} className={"float-end"} >
  <ChevronUp className={"float-end"} />

</Col>
      </CardHeader>

      <Collapse in={showCard}>
        <div className="m-0 p-0">
        <CardBody>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </CardBody>
        </div>
      </Collapse>
    </Card>

  )
    ;
};

export default CardWithArrow;
