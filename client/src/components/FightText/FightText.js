import React from "react";
import "./FightText.css";

const FightText = props => (
  <div>
    <p>
      {props.commPreface}
      <span style={{ fontSize: "1.08rem", fontStyle: "italic", textShadow: "1px 1px #000", color: props.text_shadow, padding: "0px 0px 0px 5px" }}>{props.name} </span>
      {props.commDescription} <span style={{ color: props.ab_color, fontSize: "1.08rem", fontStyle: "italic", padding: "0px 4px 0px 0px" }}>{props.ab_name}</span>!
      ({props.crit}{props.fail}<span style={{ color: props.ab_color }}>{props.dmg} dmg</span>: <span style={{ color: props.results_color }}>{props.hp_left} {props.who}</span>)
    </p>
    <p>{props.commQuip}</p>
  </div>
);

export default FightText;