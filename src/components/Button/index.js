import React from "react";

export function Button(props) {
  return (
    <button {...props} style={{ marginBottom: 10 }} className="btn btn-light">
      {props.children}
    </button>
  );
}


export default Button;
