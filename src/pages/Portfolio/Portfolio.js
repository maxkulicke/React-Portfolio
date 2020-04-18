import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Card } from "../../components/Card";
import Jumbotron from "../../components/Jumbotron"
import Button from "../../components/Button"
import "./style.css"



function Portfolio() {
  return (
    <div id="portfolio">
      <Row>
        <Col size="md-1">
        </Col>
        <Col size="md-10">
          <Container fluid
            className="portfolio"
          >
            <h2>Projects</h2>
            <Row>
              <Col size="md-5">
                <Card>
                  <img src="images/cms.jpg" className="card-img portfolio-img" alt="Content Management System"
                    id="cmsImg" />
                  <h5 className="card-title">Content Management System</h5>
                  <p className="card-text">A command line CMS to manage a hypothetical company and employees</p>
                  <a href="https://github.com/maxkulicke/HW12/" className="btn btn-dark"
                    target="_blank">Repo</a>
                </Card>
              </Col>
              <Col size="md-5">
                <Card>
                  <img src="images/bthere.jpg" className="card-img portfolio-img" alt="B.There"
                    id="bThereImg" />
                  <h5 className="card-title">Event Planner and Storage App</h5>
                  <p className="card-text">Allows user to store a calendar of eventsthey are interested in</p>
                  <a href="https://maxkulicke.github.io/Group-Project-1/"
                    className="btn btn-dark" target="_blank">Visit</a>
                  <a href="https://github.com/maxkulicke/b.there"
                    className="btn btn-dark" target="_blank">Repo</a>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col size="md-5">
                <Card>
                  <img src="images/dayplanner.jpg" className="card-img portfolio-img" alt="Day Planner" id="plannerImg" />
                  <h5 className="card-title">Day Planner App</h5>
                  <p className="card-text">Planner for a work day,
                        stores schedule and updates throughout the day</p>
                  <a href="https://maxkulicke.github.io/HW5/" className="btn btn-dark"
                    target="_blank">Visit</a>
                  <a href="https://github.com/maxkulicke/HW5" className="btn btn-dark"
                    target="_blank">Repo</a>
                </Card>
              </Col>
              <Col size="md-5">
                <Card>
                  <img src="images/passwordgenerator.jpg" className="card-img portfolio-img" alt="Password Generator"
                    id="passwordImg" />
                  <h5 className="card-title">Password Generator</h5>
                  <p className="card-text">A random password generator with user defined parameters</p>
                  <a href="https://maxkulicke.github.io/HW3/" className="btn btn-dark"
                    target="_blank">Visit</a>
                  <a href="https://github.com/maxkulicke/HW3/" className="btn btn-dark"
                    target="_blank">Repo</a>
                </Card>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col size="md-1">
        </Col>
      </Row>
    </div>
  );
}

export default Portfolio;
