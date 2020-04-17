import React from "react";
import Card from "../Card"


const Container = ({ children }, props) => {

  return (
    <div className={ "Container " + props.className}>
      {children}
    </div>
  );
}

export default Container;
