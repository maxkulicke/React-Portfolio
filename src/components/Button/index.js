import React from "react";

export function Button(props) {
  return (
    <a href={props.href}
      class={props.class} target={props.target}>{props.text}</a>
  );
}


export default Button;
