import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>
      {props.children}
      {/*props.children will give us the content thats wrapped under the opening and closing card component jun chai hamro addUser.js ma xa */}
    </div>
  );
};

export default Card;
