import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import LowerHeader from "./LowerHeader";
import classes from "./Header.module.css";

function Header() {
  return (
    <section>
      <div className={classes.header_container}>
        <div className={classes.logo_container}>
          <a href="#">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon-logo"
            />
          </a>
          <div className={classes.delivery}>
            <span>
              <CiLocationOn size={25} />
            </span>
            <div>
              <p>Delivery to </p>
              <span> Ethiopia</span>
            </div>
          </div>
        </div>
        <div className={classes.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" placeholder="Search Amazon" />
          <CiSearch size={25} />
        </div>
        <div className={classes.order_container}>
          <a href="" className={classes. language}>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png?20151118161041"
              alt="US flag"
            />
            <select name="" id="">
              <option value="EN">EN</option>
            </select>
          </a>

          <a href="">
            <p>Hello, Sign In</p>
            <span>Account & Lists</span>
          </a>
          <a href="/">
            <p>Returns</p>
            <span>& Orders</span>
          </a>
          <a href="" className={classes.cart}>
            <BsCart size={25} />
            <span>0</span>
          </a>
        </div>
      </div>
      <LowerHeader />
    </section>
  );
}

export default Header;
