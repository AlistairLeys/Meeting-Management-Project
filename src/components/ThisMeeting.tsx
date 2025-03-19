import { FunctionComponent } from "react";
import This from "./This";
import styles from "./ThisMeeting.module.css";

export type ThisMeetingType = {
  className?: string;

  /** Variant props */
  property1?: boolean;
};

const ThisMeeting: FunctionComponent<ThisMeetingType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div className={[styles.thisMeeting, className].join(" ")}>
      <This />
    </div>
  );
};

export default ThisMeeting;
