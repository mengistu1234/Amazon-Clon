import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import classes from "./Header.module.css"
function LowerHeader() {
  return (
    <div className={classes.lower_container}>
      <ul>
        <li className={classes.menu}>
          <AiOutlineMenu />
          <p>All</p>
        </li>

        <li>Today's Deals</li>
        <li>Costumer Service</li>
        <li>Registrcy</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader;
