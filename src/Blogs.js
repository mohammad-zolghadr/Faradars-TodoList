import React from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div>
      <Link to="/posts">
        <button>برو به صفحه اصلی</button>
      </Link>
    </div>
  );
};

export default Blogs;
