<<<<<<< HEAD
=======
import { FunctionComponent } from "react";
import AttendeeNumbers from "./AttendeeNumbers";
import styles from "./MinutesContentBox.module.css";

export type MinutesContentBoxType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const MinutesContentBox: FunctionComponent<MinutesContentBoxType> = ({
  className = "",
  property1 = "Expanded",
}) => {
  return (
    <div
      className={[styles.minutesContentBox, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.titleWrapper}>
        <b className={styles.title}>Meeting title</b>
      </div>
      <div className={styles.lockParent}>
        <img className={styles.lockIcon} alt="" src="/lock.svg" />
        <AttendeeNumbers property1="Default" />
      </div>
    </div>
  );
};

export default MinutesContentBox;

>>>>>>> Incoming
