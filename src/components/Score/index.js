import React from "react";
import "./style.css";

function Score(props) {
  return (<div>
  
    <div className="scores">{props.children}
      
    </div>
  </div>);
}

export default Score;
