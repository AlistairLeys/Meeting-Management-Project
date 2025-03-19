import { FunctionComponent } from "react";
import ButtonChatMeetings1 from "./ButtonChatMeetings1";
import styles from "./ChatBox.module.css";

export type ChatBoxType = {
  className?: string;

  /** Variant props */
  collapsed?: boolean;
};

const ChatBox: FunctionComponent<ChatBoxType> = ({
  className = "",
  collapsed = true,
}) => {
  return (
    <div
      className={[styles.chatBox, className].join(" ")}
      data-collapsed={collapsed}
    >
      <div className={styles.collapsedfalse}>
        <div className={styles.header}>
          <button className={styles.bigArrowRight1}>
            <img
              className={styles.bigArrowRight}
              alt=""
              loading="lazy"
              src="/big-arrow-right1.svg"
            />
          </button>
          <div className={styles.chatTitle1}>
            <h3 className={styles.chatTitle}>chat</h3>
          </div>
        </div>
        <div className={styles.questionsreplies}>
          <div className={styles.replyBox}>
            <ButtonChatMeetings1 property1={0} />
            <div className={styles.chatResponseBox}>
              <textarea className={styles.chatResponse} />
            </div>
          </div>
          <div className={styles.questionBox}>
            <div className={styles.questionText}>
              <input className={styles.typeHere} type="text" />
            </div>
            <img
              className={styles.greyArrowIcon}
              alt=""
              src="/grey-arrow1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
