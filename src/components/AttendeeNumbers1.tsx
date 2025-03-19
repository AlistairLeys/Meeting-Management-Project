import { FunctionComponent } from "react";
import ButtonAttendeeNumbers from "./ButtonAttendeeNumbers";
import styles from "./AttendeeNumbers1.module.css";

export type AttendeeNumbers1Type = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const AttendeeNumbers1: FunctionComponent<AttendeeNumbers1Type> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div
      className={[styles.attendeeNumbers, className].join(" ")}
      data-property1={property1}
    >
      <ButtonAttendeeNumbers property1="Default" />
    </div>
  );
};

export default AttendeeNumbers1;
