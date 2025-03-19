import { FunctionComponent } from "react";
import ThisMeeting from "./ThisMeeting";
import AllMeetings from "./AllMeetings";
import styles from "./ButtonChatMeetings.module.css";

export type ButtonChatMeetingsType = {
  className?: string;

  /** Variant props */
  property1?: 0;
};

const ButtonChatMeetings: FunctionComponent<ButtonChatMeetingsType> = ({
  className = "",
  property1 = 0,
}) => {
  return (
    <div
      className={[styles.buttonChatMeetings, className].join(" ")}
      data-property1={property1}
    >
      <ThisMeeting />
      <AllMeetings property1="Default" />
    </div>
  );
};

export default ButtonChatMeetings;
