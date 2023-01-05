import React from "react";
import { Link } from "react-router-dom";

import style from "./BottomNavigation.module.css";

// icons
import addOn from "../assets/images/add-on.svg";
import addOff from "../assets/images/add-off.svg";
import workListOn from "../assets/images/work-list-on.svg";
import workListOff from "../assets/images/work-list-off.svg";

const BottomNavigation = () => {
  return (
    <div className={style.wrapper}>
      <Link className={style.bnItem}>
        <img src={addOn} />
        <span>اضافه کردن</span>
      </Link>
      <Link className={style.bnItem}>
        <img src={workListOff} />
        <span>لیست کارها</span>
      </Link>
    </div>
  );
};

export default BottomNavigation;
