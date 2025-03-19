import { FunctionComponent } from "react";
import ButtonCopy from "./ButtonCopy";
import styles from "./Summary.module.css";

export type SummaryType = {
  className?: string;
};

const Summary: FunctionComponent<SummaryType> = ({ className = "" }) => {
  return (
    <div className={[styles.summary, className].join(" ")}>
      <div className={styles.header}>
        <h4 className={styles.summaryTitle}>Summary</h4>
        <ButtonCopy property1="Default" />
      </div>
      <div className={styles.summaryBody}>
        <summary className={styles.textTextText}>
          Text Text Text Text Text Text Text Text Text Text Text Text Text Text
          Text Text Text Text Text Text Text Text Text Text Text Text Text Text
          Text Text Text Text Text Text Text Text Text Text Text Text Text Text
          Text Text Text Text Text Text Text Text Text Text Text Text Text Text
          Text Te
        </summary>
      </div>
    </div>
  );
};

export default Summary;
