import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import style from "./ListOfTodos.module.css";

import emptyList from "../assets/images/emptyList.svg";

// Components
import Work from "./Work";
import { useSelector, useDispatch } from "react-redux";

//
import { getAllWork } from "../redux/reduxAction";

const ListOfTodos = () => {
  const dispatch = useDispatch();
  const reduxData = useSelector((state) => state.workAddReducer);
  const loadedItems = reduxData.workList;

  useEffect(() => {
    document.title = "لیست همه کارها";
    // get all todos from local
    dispatch(getAllWork());
  }, []);
  return (
    <div className={style.wlContainer}>
      {loadedItems.length > 0 ? (
        // Show Items
        loadedItems.map((item) => <Work key={item.id} data={item} />)
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
