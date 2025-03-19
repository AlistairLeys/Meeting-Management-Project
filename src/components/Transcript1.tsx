import { FunctionComponent } from "react";
import styles from "./Transcript1.module.css";

export type Transcript1Type = {
  className?: string;
  transcriptText?: string;

  /** Variant props */
  collapsed?: boolean;
};

const Transcript1: FunctionComponent<Transcript1Type> = ({
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
          <div className={styles.buttonCollapse}>
            <button className={styles.collapseArrowIcon1}>
              <img
                className={styles.collapseArrowIcon}
                alt=""
                loading="lazy"
                src="/collapse-arrow-icon.svg"
              />
            </button>
          </div>
        </div>
        <div className={styles.questionsreplies}>
          <div className={styles.searchBox}>
            <div className={styles.searchText}>
              <img
                className={styles.symbolSearchSmall}
                alt=""
                src="/symbol-search-small.svg"
              />
              <input className={styles.search} type="text" />
            </div>
          </div>
          <div className={styles.replyBox}>
            <div className={styles.questionText}>
              <textarea className={styles.transcriptBody}>
                {transcriptText}
              </textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transcript1;
