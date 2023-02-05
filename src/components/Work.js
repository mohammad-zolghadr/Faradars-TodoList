import React, { useEffect, useState } from "react";

import style from "./Work.module.css";

// Icon
import IconClockOn from "../assets/images/clock-on.svg";
import IconCheckOn from "../assets/images/check-on.svg";
import IconCheckOff from "../assets/images/check-off.svg";
import IconTrash from "../assets/images/trash.svg";

// Redux
import { removeWork, doneWork, undoneWork } from "../redux/reduxAction";
import { useDispatch, useSelector } from "react-redux";

const Work = (props) => {
  const { id, title, desc, priority, time, isDone } = props.data;
  const [descControl, setDescControl] = useState({
    desc: "",
    showPoints: true,
  });
  const [isDoneState, setIsDoneState] = useState(isDone);

  const dispatch = useDispatch();
  const reduxData = useSelector((state) => state.workAddReducer);

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
        isDoneState
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
        <img
          onClick={() => {
            isDoneState
              ? dispatch(undoneWork(props.data))
              : dispatch(doneWork(props.data));
            setIsDoneState(
              reduxData.workList.find((item) => item.id === id).isDone
            );
          }}
          src={IconCheckOff}
        />
        <img
          onClick={() => dispatch(removeWork(props.data))}
          src={IconTrash}
          className={style.wliTrash}
        />
      </div>
    </div>
  );
};

export default Work;
