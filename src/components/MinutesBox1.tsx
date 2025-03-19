import { FunctionComponent } from "react";
import MinutesContentBox1 from "./MinutesContentBox1";
import styles from "./MinutesBox1.module.css";

export type MinutesBox1Type = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const MinutesBox1: FunctionComponent<MinutesBox1Type> = ({
  className = "",
  property1 = "Expanded",
}) => {
  return (
    <div
      className={[styles.minutesBox, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.minutesFrame}>
        <div className={styles.header}>
          <div className={styles.chatTitle1}>
            <h3 className={styles.chatTitle}>minutes</h3>
          </div>
          <div className={styles.dateAndArrow}>
            <div className={styles.date}>
              <h3 className={styles.dd}>21</h3>
              <h3 className={styles.mm}>01</h3>
              <h3 className={styles.yy}>25</h3>
            </div>
            <button className={styles.buttonCollapse}>
              <img
                className={styles.collapseArrowIcon}
                alt=""
                src="/big-arrow-down.svg"
              />
            </button>
          </div>
        </div>
        <div className={styles.minutes} data-acc-group>
          <MinutesContentBox1
            property1="Expanded"
            showMinutesContentBox
            showActionPoints
          />
          <MinutesContentBox1
            property1="Expanded"
            showMinutesContentBox={false}
            showActionPoints={false}
          />
        </div>
      </div>
    </div>
  );
};

export default MinutesBox1;
