import React from 'react'
import  classes from  "./Catagory.module.css"
function CardCatagory({data}) {
  return (
    <div className={classes.catagory}>
      <a href="">
        <span>
          <h2 className="font-bold">{data.title}</h2>
        </span>
        <img src={data.imgLink} alt="" />
        <p>Shop Now</p>
      </a>
    </div>
  );
}

export default CardCatagory;
