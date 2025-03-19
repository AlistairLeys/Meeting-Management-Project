import { FunctionComponent } from "react";
import ButtonChatMeetings from "./ButtonChatMeetings";
import styles from "./ChatBoxMinutes.module.css";

export type ChatBoxMinutesType = {
  className?: string;

  /** Variant props */
  collapsed?: boolean;
};

const ChatBoxMinutes: FunctionComponent<ChatBoxMinutesType> = ({
  className = "",
  collapsed = true,
}) => {
  return (
    <div
      className={[styles.chatBoxMinutes, className].join(" ")}
      data-collapsed={collapsed}
    >
      <div className={styles.collapsedfalse}>
        <div className={styles.header}>
          <img
            className={styles.bigArrowRight}
            loading="lazy"
            alt=""
            src="/big-arrow-right.svg"
          />
          <div className={styles.chatTitle1}>
            <h2 className={styles.chatTitle}>chat</h2>
          </div>
        </div>
        <div className={styles.questionsreplies}>
          <div className={styles.replyBox}>
            <ButtonChatMeetings property1={0} />
          </div>
          <div className={styles.questionBox}>
            <div className={styles.questionText}>
              <div className={styles.typeHere}>Type here...</div>
            </div>
            <img
              className={styles.greyArrowIcon}
              alt=""
              src="/grey-arrow.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBoxMinutes;
