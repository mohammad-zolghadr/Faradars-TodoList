import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import style from "./BottomNavigation.module.css";

// icons
import addOn from "../assets/images/add-on.svg";
import addOff from "../assets/images/add-off.svg";
import workListOn from "../assets/images/work-list-on.svg";
import workListOff from "../assets/images/work-list-off.svg";

const BottomNavigation = () => {
  const [add, setAdd] = useState({ src: addOn, className: style.bnItemOn });
  const [listOfTodo, setListOfTodo] = useState({
    src: workListOff,
    className: style.bnItemOff,
  });

  const location = useLocation();

  useEffect(() => {
    setNavColor(location.pathname.replace("/", ""));
  }, [location.pathname]);

  const setNavColor = (routeName) => {
    switch (routeName) {
      case "add-todo":
      case "":
        setAdd({ src: addOn, className: style.bnItemOn });
        setListOfTodo({
          src: workListOff,
          className: style.bnItemOff,
        });
        break;
      case "list-of-todos":
        setAdd({ src: addOff, className: style.bnItemOff });
        setListOfTodo({
          src: workListOn,
          className: style.bnItemOn,
        });
        break;

      default:
        setAdd({ src: addOn, className: style.bnItemOn });
        setListOfTodo({
          src: workListOff,
          className: style.bnItemOff,
        });
        break;
    }
  };

  return (
    <div className={style.wrapper}>
      <Link to="/add-todo" className={style.bnItem}>
        <img src={add.src} />
        <span className={add.className}>اضافه کردن</span>
      </Link>
      <Link to="/list-of-todos" className={style.bnItem}>
        <img src={listOfTodo.src} />
        <span className={listOfTodo.className}>لیست کارها</span>
      </Link>
    </div>
  );
};

export default BottomNavigation;
