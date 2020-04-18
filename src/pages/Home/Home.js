import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import { ImageCard, BasicCard } from "../../components/Card";
import { H1 } from "../../components/Header";
import "./style.css"


function Home() {
  return (
    <div id="home">
      <Row>
        <Col size="md-1"></Col>
        <Col size="md-10">
          <Container fluid>
            <h2>Max Kulicke</h2>
          </Container>
        </Col>
        <Col size="md-1"></Col>
      </Row>
    </div>
  );
}

export default Home;
