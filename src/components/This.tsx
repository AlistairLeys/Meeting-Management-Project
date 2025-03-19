import { FunctionComponent } from "react";
import styles from "./This.module.css";

export type ThisType = {
  className?: string;

  /** Variant props */
  property1?: boolean;
};

const This: FunctionComponent<ThisType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <button className={[styles.this4, className].join(" ")}>
      <div className={styles.title}>this meeting</div>
    </button>
  );
};

export default This;
