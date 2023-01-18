import React from "react";
import { Link } from "react-router-dom";

import style from "./ListOfTodos.module.css";

import emptyList from "../assets/images/emptyList.svg";

// Components
import Work from "./Work";

const ListOfTodos = () => {
  const loadedItems = [];
  return (
    <div className={style.wlContainer}>
      {loadedItems.length > 0 ? (
        // Show Items
        loadedItems.map((item) => <Work />)
      ) : (
        // Show EmptyList
        <div className={style.wlEmptyList}>
          <img src={emptyList} />
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
