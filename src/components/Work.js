import React from "react";

import style from "./Work.module.css";

// Icon
import IconClockOn from "../assets/images/clock-on.svg";
import IconCheckOn from "../assets/images/check-on.svg";
import IconCheckOff from "../assets/images/check-off.svg";
import IconTrash from "../assets/images/trash.svg";

const Work = () => {
  return (
    <div className={`${style.wliContainer} ${style.wliDone}`}>
      <h2>عنوان</h2>
      <span className={style.wliPriority}>اولویت</span>
      <div className={style.wliTime}>
        <img src={IconClockOn} />
        <span>11 ساعت</span>
      </div>
      <p>توضیحات</p>
      <div className={style.wliIcons}>
        <img src={IconCheckOff} />
        <img src={IconTrash} className={style.wliTrash} />
      </div>
    </div>
  );
};

export default Work;
