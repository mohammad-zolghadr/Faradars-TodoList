import React from "react";

import style from "./ListOfTodos.module.css";
import emptyImage from "../assets/images/emptyList.svg";
import Work from "./Work";
import { Link } from "react-router-dom";

const ListOfTodos = () => {
  const loadedItems = [];
  return (
    <div className={style.wlContainer}>
      {loadedItems.length > 0 ? (
        loadedItems.map((item) => {
          return <Work />;
        })
      ) : (
        <div className={style.wlEmptyList}>
          <img src={emptyImage} />
          <p>لیست کارهات خالیه دوست من</p>
          <Link to="/add-todo">
            <button>اضافه کردن کار جدید</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ListOfTodos;
