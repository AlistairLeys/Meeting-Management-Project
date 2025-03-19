import { FunctionComponent } from "react";
import styles from "./Transcript.module.css";

export type TranscriptType = {
  className?: string;

  /** Variant props */
  collapsed?: boolean;
};

const Transcript: FunctionComponent<TranscriptType> = ({
  className = "",
  collapsed = false,
}) => {
  return (
    <div
      className={[styles.transcript, className].join(" ")}
      data-collapsed={collapsed}
    >
      <div className={styles.transcriptFrame}>
        <div className={styles.header}>
          <div className={styles.chatTitle1}>
            <h2 className={styles.chatTitle}>transcript</h2>
          </div>
          <div className={styles.bigArrowDownWrapper}>
            <img
              className={styles.bigArrowDown}
              loading="lazy"
              alt=""
              src="/big-arrow-down.svg"
            />
          </div>
        </div>
        <div className={styles.questionsreplies}>
          <div className={styles.replyBox}>
            <div className={styles.questionText}>
              <div className={styles.useTheControl}>
                Use the control buttons in the navigation bar to record, pause,
                or end the meeting.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transcript;
