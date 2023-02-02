import React, { useEffect, useState } from "react";

import style from "./Work.module.css";

// Icon
import IconClockOn from "../assets/images/clock-on.svg";
import IconCheckOn from "../assets/images/check-on.svg";
import IconCheckOff from "../assets/images/check-off.svg";
import IconTrash from "../assets/images/trash.svg";

const Work = (props) => {
  const { id, title, desc, priority, time, isDone } = props.data;
  const [descControl, setDescControl] = useState({
    desc: "",
    showPoints: true,
  });

  useEffect(() => {
    setDescControl({ desc: desc.substring(0, 100), showPoints: true });
  }, []);

  const setPriority = (priority) => {
    switch (priority) {
      case "high":
        return "خیلی مهم";
      case "medium":
        return "متوسط";
      case "low":
        return "کم";
      default:
        return "کم";
    }
  };

  return (
    <div
      className={
        isDone
          ? `${style.wliContainer} ${style.wliDone}`
          : `${style.wliContainer}`
      }
    >
      <h2>{title}</h2>
      <span className={style.wliPriority}>{setPriority(priority)}</span>
      <div className={style.wliTime}>
        <img src={IconClockOn} />
        <span>{time} ساعت</span>
      </div>
      <p>
        {descControl.desc}
        <span
          className={style.wliShowMore}
          onClick={() => setDescControl({ desc: desc, showPoints: false })}
        >
          {descControl.showPoints && descControl.desc && <>...</>}
        </span>
      </p>
      <div className={style.wliIcons}>
        <img src={IconCheckOff} />
        <img src={IconTrash} className={style.wliTrash} />
      </div>
    </div>
  );
};

export default Work;
