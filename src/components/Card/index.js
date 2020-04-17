import React from "react";

const Card = (props) => {
  return (props.pictureSrc ? imageCard(props) : textCard(props));
}

const imageCard = (props) => {
  return (
    <div className="row">
      <div className="card">
        <h5 className="card-title">{props.title}</h5>
        <img className="card-img" src={props.pictureSrc} className="card-img" id={props.pictureId} alt={props.pictureAlt}></img>
        <div className="card-body">
          {props.text}
        </div>
      </div>
    </div>
  );
}

const textCard = (props) => {
  return (
    <div className="row">
      <div className="card">
        <h5 className="card-title">{props.title}</h5>
        <div className="card-body">
          {props.text}
        </div>
      </div>
    </div>
  );
}

export default Card;
