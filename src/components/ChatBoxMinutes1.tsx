import { FunctionComponent } from "react";
import ButtonChatMeetings2 from "./ButtonChatMeetings2";
import styles from "./ChatBoxMinutes1.module.css";

export type ChatBoxMinutes1Type = {
  className?: string;

  /** Variant props */
  collapsed?: boolean;
};

const ChatBoxMinutes1: FunctionComponent<ChatBoxMinutes1Type> = ({
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
          <img className={styles.bigArrowRight} loading="lazy" alt="" />
          <div className={styles.chatTitle1}>
            <h3 className={styles.chatTitle}>chat</h3>
          </div>
        </div>
        <div className={styles.questionsreplies}>
          <div className={styles.replyBox}>
            <ButtonChatMeetings2 property1={0} />
          </div>
          <div className={styles.questionBox}>
            <div className={styles.questionText}>
              <div className={styles.typeHere}>Type here...</div>
            </div>
            <img className={styles.greyArrowIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBoxMinutes1;
