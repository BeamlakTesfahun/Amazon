import React from "react";
import classes from "./Category.module.css";
//import LayOut from "../../Components/LayOut/LayOut";
import { Link } from "react-router-dom";

function CategoryCard({ data }) {
  console.log(data);
  return (
    <div className={classes.category}>
      <a href={`/category/${data.name}`}>
        <span>
          <h2>{data?.title}</h2>
        </span>
        <img src={data?.imgLink} alt="" />
        <p>Shop now</p>
      </a>
    </div>
  );
}

export default CategoryCard;
