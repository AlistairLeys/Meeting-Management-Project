import { FunctionComponent } from "react";
import All2 from "./All2";
import styles from "./AllMeetings2.module.css";

export type AllMeetings2Type = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const AllMeetings2: FunctionComponent<AllMeetings2Type> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div
      className={[styles.allMeetings, className].join(" ")}
      data-property1={property1}
    >
      <All2 property1="Default" />
    </div>
  );
};

export default AllMeetings2;
