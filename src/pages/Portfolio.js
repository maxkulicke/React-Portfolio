import React from "react";
import { Col, Row, Container } from "../components/Grid";
import { Card } from "../components/Card";
import Jumbotron from "../components/Jumbotron"
import Button from "../components/Button"


function Portfolio() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-1">
        </Col>
        <Col size="md-10">
          <Row>
            <Col size="md-5">
              <Card>
                <h5 className="card-title">Test</h5>
                <img className="card-img" src="" className="card-img" id="" alt="" />
                <div className="card-body">
                  Test text
                </div>
              </Card>
            </Col>
            <Col size="md-5">
              <Card>
                <h5 className="card-title">Test</h5>
                <img className="card-img" src="" className="card-img" id="" alt="" />
                <div className="card-body">
                  Test text
                </div>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col size="md-5">
              <Card>
                <h5 className="card-title">Test</h5>
                <img className="card-img" src="" className="card-img" id="" alt="" />
                <div className="card-body">
                  Test text
                </div>
              </Card>
            </Col>
            <Col size="md-5">
              <Card>
                <h5 className="card-title">Test</h5>
                <img className="card-img" src="" className="card-img" id="" alt="" />
                <div className="card-body">
                  Test text
                </div>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col size="md-1">
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
