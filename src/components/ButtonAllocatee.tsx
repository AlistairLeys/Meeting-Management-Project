import { FunctionComponent } from "react";
import AttendeeDefault from "./AttendeeDefault";
import styles from "./ButtonAllocatee.module.css";

export type ButtonAllocateeType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const ButtonAllocatee: FunctionComponent<ButtonAllocateeType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <button
      className={[styles.buttonAllocatee, className].join(" ")}
      data-property1={property1}
    >
      <AttendeeDefault property1="Default" />
    </button>
  );
};

export default ButtonAllocatee;
