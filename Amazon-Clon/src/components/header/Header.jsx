import React, { useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import LowerHeader from "./LowerHeader";
import classes from "./Header.module.css";
import { DataContext } from "../dataProvider/DataProvider";
import { auth } from "../../Utility/firebase";

function Header() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header_container}>
          <div className={classes.logo_container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon-logo"
              />
            </Link>

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
            <CiSearch size={40} />
          </div>
          <div className={classes.order_container}>
            <Link to="/" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png?20151118161041"
                alt="US flag"
              />
              <select name="" id="">
                <option value="EN">EN</option>
              </select>
            </Link>
            <Link to={!user && "/Auth"}>
              <div>
                {user ? (
                  <>
                    <p>{user?.email?.split("@")[0]}</p>
                    <span onClick={() => auth.signOut()}>Sign Out</span>
                  </>
                ) : (
                  <>
                    <p> Hello, Sign In ⬇️</p>
                    <span>Account & Lists</span>
                  </>
                )}
              </div>
            </Link>

            <Link to="/orders">
              <p>Returns</p>
              <span>& Orders</span>
            </Link>
            <Link to="/cart" className={classes.cart}>
              <BsCart size={25} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
        <LowerHeader />
      </section>
    </section>
  );
}

export default Header;
