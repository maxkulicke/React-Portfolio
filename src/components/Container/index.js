import React from "react";
import Card from "../Card"


const Container = (props) => {

  return (
    <div className="container">
      {props.body}
    </div>
  );
}

export default Container;
