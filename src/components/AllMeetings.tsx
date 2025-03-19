import { FunctionComponent } from "react";
import All from "./All";
import styles from "./AllMeetings.module.css";

export type AllMeetingsType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const AllMeetings: FunctionComponent<AllMeetingsType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div
      className={[styles.allMeetings, className].join(" ")}
      data-property1={property1}
    >
      <All property1="Default" />
    </div>
  );
};

export default AllMeetings;
