import React from "react";

export function Button(props) {
  return (
<a href={props.href}
class={props.class} target={props.target}>Visit</a>
  );
}


export default Button;
