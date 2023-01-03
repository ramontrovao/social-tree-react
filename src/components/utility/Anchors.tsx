import React from "react";
import "../../styles/utilityStyles/homeAnchor.scss";

export const Anchor = (props) => {
  return (
    <a href={props.link} className="homeAnchor" target="_blank">
      {props.content}
    </a>
  );
};
