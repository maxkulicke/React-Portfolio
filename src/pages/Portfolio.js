import React from "react";
import Container from "../Container";
import Card from "../Card";
// import Form from "../Form";

function Portfolio() {
  return (
    <Container
      body={
        <div>
          <Card
            title="Card Title"
            text="Sample card text to be used as an example"
          />
          <Card
            title="Card Title"
            text="Sample card text to be used as an example"
          />
          <Card
            title="Card Title"
            text="Sample card text to be used as an example"
          />
          <Card
            title="Card Title"
            text="Sample card text to be used as an example"
          />
        </div>
      }
    />

  );
}

export default Portfolio;
