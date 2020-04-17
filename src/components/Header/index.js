import React from "react";
import { Col, Row, Container } from "../Grid";

export function H1(props) {
  return (
    <Row>
      <h1>{props.text}</h1>
    </Row>
  );
}

export function H2(props) {
  return (
    <Row>
      <h2>{props.text}</h2>
    </Row>
  );
}

export function H3(props) {
  return (
    <Row>
      <h3>{props.text}</h3>
    </Row>
  );
}

export function H4(props) {
  return (
    <Row>
      <h4>{props.text}</h4>
    </Row>
  );
}

export function H5(props) {
  return (
    <Row>
      <h5>{props.text}</h5>
    </Row>
  );
}

export function H6(props) {
  return (
    <Row>
      <h6>{props.text}</h6>
    </Row>
  );
}
