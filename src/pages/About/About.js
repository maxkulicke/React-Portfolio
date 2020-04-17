import React from "react";
import { Card } from "../../components/Card";
import { Col, Row, Container } from "../../components/Grid";
import "./style.css"
// import Blue from "../../public/assets/images/max_on_box"

function About() {

  return (
    <Row className="about">
      <Col size="md-1"></Col>
      <Col size="md-10">
        <Container fluid>
          <Card>
            <img className="card-img" src="../../public/assets/images/max_on_box" className="card-img" id="" alt="max" />
            <h2>About Me</h2>
            <p>
              Live and Studio guitarist
              <br />
              <br />
              Full Stack Web Developer
              Technologies:
              <ul>
                <li>Node JS</li>
                <li>React</li>
                <li>mySQL</li>
                <li>Mongo</li>
                <li>Express</li>
              </ul>
              <br />
              Music Teacher
            </p>
          </Card>
        </Container>
      </Col>
      <Col size="md-1"></Col>
    </Row>
  );
}

export default About;
