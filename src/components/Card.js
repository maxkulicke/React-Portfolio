import React from "react";

const Card = (props) => {

  return (
    <div className="row">
      <div className="card">
        <h5 className="card-title">{props.label}</h5>
        <div className="card-body">
          {/* <img className="card-img" src={props.picture} className="card-img" alt="employee"></img>
          <p className="card-text">SSN: {props.ssn}</p> */}
        </div>
      </div>
    </div>
  );
}

export default Card;
