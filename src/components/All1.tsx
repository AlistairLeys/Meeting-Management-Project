import { FunctionComponent } from "react";
import styles from "./All1.module.css";

export type All1Type = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const All1: FunctionComponent<All1Type> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div
      className={[styles.all2, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.title}>all meetings</div>
    </div>
  );
};

export default All1;
