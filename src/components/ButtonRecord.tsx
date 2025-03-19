import { FunctionComponent } from "react";
import styles from "./ButtonRecord.module.css";

export type ButtonRecordType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const ButtonRecord: FunctionComponent<ButtonRecordType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div
      className={[styles.buttonRecord, className].join(" ")}
      data-property1={property1}
    >
      <img
        className={styles.navbarBlueButtonBackground}
        alt=""
        src="/navbar-blue-button-backgrounddefault.svg"
      />
      <img
        className={styles.recorddefaultIcon}
        loading="lazy"
        alt=""
        src="/recorddefault.svg"
      />
    </div>
  );
};

export default ButtonRecord;
