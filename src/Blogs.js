import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { increase } from "./redux/action";

const Blogs = () => {
  const reduxData = useSelector((state) => state.todoReducer);
  console.log(reduxData);
  const dispatch = useDispatch();
  return (
    <div>
      {/* <Link to="/posts"> */}
      <button
        onClick={() => {
          dispatch(increase());
        }}
      >
        Increase
      </button>
      <p>{reduxData.count}</p>
      {/* </Link> */}
    </div>
  );
};

export default Blogs;
