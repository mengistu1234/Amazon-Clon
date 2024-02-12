import React from "react";
import { Link } from "react-router-dom";
import classes from "./Catagory.module.css";
function CardCatagory({ data }) {
  return (
    <div className={classes.catagory}>
      <Link to={`/category/${data.name}`}>
        <span>
          <h2 className="font-bold">{data.title}</h2>
        </span>
        <img src={data.imgLink} alt="" />
        <p>Shop Now</p>
      </Link>
    </div>
  );
}

export default CardCatagory;
