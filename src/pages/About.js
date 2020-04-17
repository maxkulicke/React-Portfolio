import React from "react";
import { Card } from "../components/Card";
import { Col, Row, Container } from "../components/Grid";
// import Blue from "../../public/assets/images/max_on_box"

function About() {
  return (
    <Container>
      <Card>
        <img className="card-img" src="../../public/assets/images/max_on_box" className="card-img" id="" alt="max" />
        <h4>About Me</h4>
        <p>
          I'm an aspiring programmer and web developer, currently enrolled in the Penn LPS Coding Bootcamp.
          I'm hoping to build tools anyone could use to make the world a more sustainable place."
        </p>
      </Card>
    </Container>
  );
}

export default About;
