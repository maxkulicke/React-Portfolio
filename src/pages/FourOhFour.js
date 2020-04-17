import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card"
import Jumbotron from "../components/Jumbotron"

function FourOhFour() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>404: PAGE NOT FOUND AMIGO</h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default FourOhFour;
