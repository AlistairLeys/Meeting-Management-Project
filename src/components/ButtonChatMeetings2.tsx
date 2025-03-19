import { FunctionComponent } from "react";
import styles from "./ButtonChatMeetings.module.css";

const ButtonChatMeetings2: FunctionComponent = ({ className = "" }) => {
  return (
    <div className={[styles.buttonChatMeetings, className].join(" ")}>
      <div className={styles.thisMeeting}>
        <button className={styles.this4}>
          <div className={styles.title}>this meeting</div>
        </button>
      </div>
      <div className={styles.allMeetings}>
        <button className={styles.all2}>
          <div className={styles.title1}>all meetings</div>
        </button>
      </div>
    </div>
  );
};

export default ButtonChatMeetings2;
