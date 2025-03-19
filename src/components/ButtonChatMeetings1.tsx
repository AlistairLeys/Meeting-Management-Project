import { FunctionComponent } from "react";
import ThisMeeting1 from "./ThisMeeting1";
import AllMeetings1 from "./AllMeetings1";
import styles from "./ButtonChatMeetings1.module.css";

export type ButtonChatMeetings1Type = {
  className?: string;

  /** Variant props */
  property1?: 0;
};

const ButtonChatMeetings1: FunctionComponent<ButtonChatMeetings1Type> = ({
  className = "",
  property1 = 0,
}) => {
  return (
    <div
      className={[styles.buttonChatMeetings, className].join(" ")}
      data-property1={property1}
    >
      <ThisMeeting1 />
      <AllMeetings1 property1="Default" />
    </div>
  );
};

export default ButtonChatMeetings1;
