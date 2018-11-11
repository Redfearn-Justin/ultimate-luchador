import React from "react";
import "./FightText.css";




const FightText = props => (
  <p>Woah!
    <span style={{ fontSize: "1.08rem", fontStyle: "italic", textShadow: props.text_shadow, padding: "0px 0px 0px 5px" }}>{props.name} </span>  
    used <span style={{ color: props.ab_color, fontSize: "1.08rem", fontStyle: "italic", padding: "0px 4px 0px 0px" }}>{props.ab_name}</span>! 
    ({props.crit}{props.fail}<span style={{ color: props.ab_color }}>{props.dmg} dmg</span>: {props.who} have <span style={{ color: props.results_color }}>{props.hp_left} hp remaining</span>)</p>
);

export default FightText;