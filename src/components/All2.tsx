import { FunctionComponent } from "react";
import styles from "./All2.module.css";

export type All2Type = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const All2: FunctionComponent<All2Type> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <button
      className={[styles.all2, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.title}>all meetings</div>
    </button>
  );
};

export default All2;
