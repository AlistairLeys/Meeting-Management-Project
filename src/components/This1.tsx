import { FunctionComponent } from "react";
import styles from "./This1.module.css";

export type This1Type = {
  className?: string;

  /** Variant props */
  property1?: boolean;
};

const This1: FunctionComponent<This1Type> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div className={[styles.this4, className].join(" ")}>
      <div className={styles.title}>this meeting</div>
    </div>
  );
};

export default This1;
