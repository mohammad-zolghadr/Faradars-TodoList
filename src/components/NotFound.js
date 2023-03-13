import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  useEffect(() => {
    document.title = "صفحه یافت نشد";
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <h4>آدرس وارد شده معتبر نیست دوست من</h4>
      <Link to="/">
        <button>بازگشت به صفحه اصلی</button>
      </Link>
    </div>
  );
};

export default NotFound;
