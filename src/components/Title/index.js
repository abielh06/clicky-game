import React from "react";
import "./style.css";

function Title(props) {
  return (<div>
    <div className="title">{props.children}</div>
    
  </div>);
}

export default Title;
