import React from "react";
import { ImageCtagory } from "./CatagoryInfo";
import CardCatagory from "./CardCatagory";
import classes from "./Catagory.module.css";

function Catagory() {
  return (
    <section className={classes.catagory_container}>
      {ImageCtagory.map((infos) => {
        return <CardCatagory data={infos} />;
      })}
    </section>
  );
}

export default Catagory;
