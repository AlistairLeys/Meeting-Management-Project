import { FunctionComponent } from "react";
import styles from "./CopyDefault.module.css";

export type CopyDefaultType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const CopyDefault: FunctionComponent<CopyDefaultType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <button
      className={[styles.copydefault, className].join(" ")}
      data-property1={property1}
    >
      <img className={styles.copyIcon} loading="lazy" alt="" src="/copy.svg" />
    </button>
  );
};

export default CopyDefault;
