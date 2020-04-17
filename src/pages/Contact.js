import React from "react";
import { Col, Row, Container } from "../components/Grid";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <Container>
      <Row>
        <Col size="md-1">
        </Col>
        <Col size="md-10">
          <ContactForm />
        </Col>
        <Col size="md-1">
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
