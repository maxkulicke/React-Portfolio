import React from "react";
import { Card } from "../../components/Card";
import { Col, Row, Container } from "../../components/Grid";
import "./style.css"
const Max = require("../../assets/images/max_on_box.jpg")

function About() {

  return (

    <div id="about">
      <Row>
        <Col size="md-1"></Col>
        <Col size="md-10">
          <Container fluid>
            <Card className="card-img-top">
              <img className="card-img"
                src={ Max } className="card-img" id="" alt="max"/>
              <div class="card-body">
                <h2>About Me</h2>
                <p>
                  Live and Studio guitarist
              <br />
                  <br />
              Full Stack Web Developer
              Technologies:
              </p>
                <ul>
                  <li>Node JS</li>
                  <li>React</li>
                  <li>mySQL</li>
                  <li>Mongo</li>
                  <li>Express</li>
                </ul>
                <p>
                  Music Teacher
                </p>
              </div>
            </Card>
          </Container>
        </Col>
        <Col size="md-1"></Col>
      </Row>
    </div>

  );
}

export default About;
