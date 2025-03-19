import { FunctionComponent } from "react";
import All1 from "./All1";
import styles from "./AllMeetings1.module.css";

export type AllMeetings1Type = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const AllMeetings1: FunctionComponent<AllMeetings1Type> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <button
      className={[styles.allMeetings, className].join(" ")}
      data-property1={property1}
    >
      <All1 property1="Default" />
    </button>
  );
};

export default AllMeetings1;
