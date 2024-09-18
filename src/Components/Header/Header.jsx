import React from "react";
import classes from "./Header.module.css";
// import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
// import { DataContext } from "../DataProvider/DataProvider";
// import { auth } from "../../Utility/firebase";

function Header() {
  // const [{ user, basket }, dispatch] = useContext(DataContext);
  // const totalItem = basket?.reduce((amount, item) => {
  //   return item.amount + amount;
  // }, 0);
  return (
    <section className={classes.fixed}>
      <div className={classes.header__container}>
        {/* logo section */}
        <div className={classes.logo__container}>
          <a to="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon logo"
            />
          </a>
          <div className={classes.delivery}>
            <span>
              <SlLocationPin />
            </span>
            <div>
              <p>Delivered to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>
        {/*serach section  */}
        <div className={classes.search}>
          <select name="" id="">
            <option value=""> All</option>
          </select>
          <input type="text" />{" "}
          {/* <input type="test" name="" id="" placeholder="search product"  />     */}
          <BsSearch size={25} />
        </div>
        {/* other section */}
        <div className={classes.order__container}>
          <a href="" className={classes.language}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/de/Flag_of_the_United_States.png"
              alt=""
            />

            <select name="" id="">
              <option value=""> EN</option>
            </select>
          </a>
          <a href="">
            <p>Sign In</p>
            <span>Account & Lists</span>
          </a>
          <a href="/orders">
            <p>returns</p>
            <span>& Orders</span>
          </a>
          <a href="/cart" className={classes.cart}>
            <BiCart size={35} />
            {/* <span>{totalItem}</span> */}
          </a>
        </div>
      </div>
      <LowerHeader />
    </section>
  );
}

export default Header;
