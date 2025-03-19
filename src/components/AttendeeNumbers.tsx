import { FunctionComponent } from "react";
import BackgroundNumbersDefault from "./BackgroundNumbersDefault";
import styles from "./AttendeeNumbers.module.css";

export type AttendeeNumbersType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const AttendeeNumbers: FunctionComponent<AttendeeNumbersType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div
      className={[styles.attendeeNumbers, className].join(" ")}
      data-property1={property1}
    >
      <BackgroundNumbersDefault property1="Default" />
    </div>
  );
};

export default AttendeeNumbers;
