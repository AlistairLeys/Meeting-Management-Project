import { FunctionComponent } from "react";
import This1 from "./This1";
import styles from "./ThisMeeting1.module.css";

export type ThisMeeting1Type = {
  className?: string;

  /** Variant props */
  property1?: boolean;
};

const ThisMeeting1: FunctionComponent<ThisMeeting1Type> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <button className={[styles.thisMeeting, className].join(" ")}>
      <This1 />
    </button>
  );
};

export default ThisMeeting1;
