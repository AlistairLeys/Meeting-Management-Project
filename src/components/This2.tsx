import { FunctionComponent } from "react";
import styles from "./This2.module.css";

export type This2Type = {
  className?: string;

  /** Variant props */
  property1?: boolean;
};

const This2: FunctionComponent<This2Type> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <button className={[styles.this4, className].join(" ")}>
      <div className={styles.title}>this meeting</div>
    </button>
  );
};

export default This2;
