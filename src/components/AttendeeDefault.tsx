import { FunctionComponent } from "react";
import styles from "./AttendeeDefault.module.css";

export type AttendeeDefaultType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const AttendeeDefault: FunctionComponent<AttendeeDefaultType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div
      className={[styles.attendeedefault, className].join(" ")}
      data-property1={property1}
    >
      <img
        className={styles.allocateeIcon}
        loading="lazy"
        alt=""
        src="/allocatee.svg"
      />
    </div>
  );
};

export default AttendeeDefault;
