import { FunctionComponent } from "react";
import styles from "./Transcript2.module.css";

export type Transcript2Type = {
  className?: string;
  transcriptText?: string;

  /** Variant props */
  collapsed?: boolean;
};

const Transcript2: FunctionComponent<Transcript2Type> = ({
  className = "",
  collapsed = false,
  transcriptText = "Transcript Body",
}) => {
  return (
    <div
      className={[styles.transcript, className].join(" ")}
      data-collapsed={collapsed}
    >
      <div className={styles.transcriptFrame}>
        <div className={styles.header}>
          <div className={styles.chatTitle1}>
            <h3 className={styles.chatTitle}>transcript</h3>
          </div>
          <div className={styles.bigArrowDownWrapper}>
            <img className={styles.bigArrowDown} alt="" />
          </div>
        </div>
        <div className={styles.questionsreplies}>
          <div className={styles.searchBox}>
            <div className={styles.searchText}>
              <img className={styles.symbolSearchSmall} loading="lazy" alt="" />
              <div className={styles.search}>Search</div>
            </div>
          </div>
          <div className={styles.replyBox}>
            <div className={styles.questionText}>
              <div className={styles.transcriptBody}>{transcriptText}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transcript2;
