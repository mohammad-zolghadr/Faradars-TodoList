import React from "react";

// Icon
import IconClockOn from "../assets/images/clock-on.svg";
import IconCheckOn from "../assets/images/check-on.svg";
import IconCheckOff from "../assets/images/check-off.svg";
import IconTrash from "../assets/images/trash.svg";

const Work = () => {
  return (
    <div>
      <h2>عنوان</h2>
      <span>اولویت</span>
      <div>
        <img src={IconClockOn} />
        <span>11 ساعت</span>
      </div>
      <p>توضیحات</p>
      <div>
        <img src={IconCheckOff} />
        <img src={IconTrash} />
      </div>
    </div>
  );
};

export default Work;
