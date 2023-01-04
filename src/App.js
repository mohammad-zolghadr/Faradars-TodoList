import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Blogs from "./Blogs";
import Posts from "./Posts";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </div>
  );
};

export default App;
