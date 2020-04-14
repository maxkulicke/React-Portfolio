import React from "react";
import Card from "./Card"


const Container = (props) => {

  let { label } = props;

  return (
    <div className="container">
      <Card label={label} />
    </div>
  );
}

export default Container;
