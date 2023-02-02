import React from "react";

import style from "./AddTodo.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddTodo = () => {
  const submitForm = (e) => {
    e.preventDefault();

    // Success
    toast.success("موفقیت آمیز بود");
    // Error
    toast.error("عملیات با خطا مواجه شد");
  };

  return (
    <form onSubmit={submitForm}>
      <div>
        <label>عنوان</label>
        <input type="text" placeholder="مثلا ورزش کردن..." />
      </div>
      <div>
        <label>توضیحات بیشتر</label>
        <textarea
          type="text"
          placeholder="توضیحاتی درباره کار را اینجا بنویسید"
        ></textarea>
      </div>
      <div className={style.addTimeAndPriority}>
        <div>
          <label>اولویت</label>
          <select name="select">
            <option value="low" key="low">
              کم
            </option>
            <option value="medium" key="medium">
              متوسط
            </option>
            <option value="high" key="high">
              مهم
            </option>
          </select>
        </div>

        <div>
          <label>زمان</label>
          <input type="number" placeholder="مدت به ساعت" />
        </div>
      </div>
      <button type="submit">اضافه کردن کار</button>
    </form>
  );
};

export default AddTodo;
