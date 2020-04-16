import React from "react";
import Card from "./Card"


const Container = (props) => {

  let { label } = props;
  let { text } = props;

  return (
    <div className="container">
      {/* <Card
        label={label}
        text={text}
      /> */}
    </div>
  );
}

export default Container;
