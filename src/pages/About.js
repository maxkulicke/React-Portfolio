import React from "react";
import Card from "../components/Card";
import Container from "../components/Container";

function About() {
  return (
    <Container
      body={
        <Card
          title="About Me"
          pictureSrc="../../../public/assets/images/max_on_box"
          pictureId="maxOnBox"
          pictureAlt="Max Kulicke"
          text="I'm an aspiring programmer and web developer, currently enrolled in the Penn LPS Coding Bootcamp.
        I'm hoping to build tools anyone could use to make the world a more sustainable place."
        />
      }
    />
  );
}

export default About;
