import { FunctionComponent } from "react";
import styles from "./ThisMeeting.module.css";

const ThisMeeting2: FunctionComponent = ({ className = "" }) => {
  return (
    <div className={[styles.thisMeeting, className].join(" ")}>
      <button className={styles.this4}>
        <div className={styles.title}>this meeting</div>
      </button>
    </div>
  );
};

export default ThisMeeting2;
