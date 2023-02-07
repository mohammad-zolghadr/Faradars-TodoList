import React, { useEffect, useState } from "react";

import style from "./AddTodo.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Redux
import { useDispatch } from "react-redux";
import { addWork } from "../redux/reduxAction";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [time, setTime] = useState("");
  const [priority, setPriority] = useState("");

  useEffect(() => {
    document.title = "اضافه کردن کار جدید";
  }, []);

  const dispatch = useDispatch();

  const setInfo = (e) => {
    switch (e.target.name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "desc":
        setDesc(e.target.value);
        break;
      case "select":
        setPriority(e.target.value);
        break;
      case "time":
        setTime(e.target.value);
        break;
    }
  };

  const clearInput = () => {
    setTitle("");
    setTime("");
    setDesc("");
    setPriority("");
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (title && desc && priority && time) {
      // Success
      const data = {
        id: getRandom(),
        title: title,
        desc: desc,
        time: time,
        priority: priority,
        isDone: false,
      };
      dispatch(addWork(data));
      clearInput();
      toast.success("اضافه کردن با موفقیت انجام شد");
    } else {
      // Error
      toast.error("لطفا همه فیلد ها را پر کنید");
    }
  };

  const getRandom = () => {
    return Math.floor(Math.random() * 100000 + 1);
  };

  return (
    <form onSubmit={submitForm}>
      <div>
        <label>عنوان</label>
        <input
          type="text"
          value={title}
          onChange={setInfo}
          placeholder="مثلا ورزش کردن..."
          name="title"
        />
      </div>
      <div>
        <label>توضیحات بیشتر</label>
        <textarea
          value={desc}
          onChange={setInfo}
          type="text"
          name="desc"
          placeholder="توضیحاتی درباره کار را اینجا بنویسید"
        ></textarea>
      </div>
      <div className={style.addTimeAndPriority}>
        <div>
          <label>اولویت</label>
          <select value={priority} onChange={setInfo} name="select">
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
          <input
            onChange={setInfo}
            value={time}
            type="number"
            name="time"
            placeholder="مدت به ساعت"
          />
        </div>
      </div>
      <button type="submit">اضافه کردن کار</button>
    </form>
  );
};

export default AddTodo;
