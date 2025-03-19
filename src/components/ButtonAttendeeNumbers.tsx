import { FunctionComponent } from "react";
import styles from "./ButtonAttendeeNumbers.module.css";

export type ButtonAttendeeNumbersType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const ButtonAttendeeNumbers: FunctionComponent<ButtonAttendeeNumbersType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <button
      className={[styles.buttonAttendeeNumbers, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.attendeenumber}>1</div>
    </button>
  );
};

export default ButtonAttendeeNumbers;
