import React from "react";
import { Col, Row, Container } from "../components/Grid";
import { ImageCard, BasicCard } from "../components/Card";
import { H1, H2, H3 } from "../components/Header"
import { IFrame } from "../components/IFrame"

function Music() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-1">
        </Col>
        <Col size="md-10">
          <H1 text="Music" />
          <H3 text="A sampling of my live and recorded work" />
          <IFrame
            src="https://open.spotify.com/embed/playlist/2jYT2jA70EZOFhL8WikqSK"
          />
          <IFrame
            src="https://open.spotify.com/embed/playlist/2jYT2jA70EZOFhL8WikqSK"
          />
        </Col>
        <Col size="md-1">
        </Col>
      </Row>
    </Container>
  );
}

export default Music;
