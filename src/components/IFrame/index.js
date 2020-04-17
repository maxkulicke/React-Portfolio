import React from "react";

export function IFrame(props) {
  return (
    <div>
      <iframe src={props.src} width="300" height="300"
        frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
  );
}


export default IFrame;
