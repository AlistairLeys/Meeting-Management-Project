import { FunctionComponent } from "react";
import styles from "./All.module.css";

export type AllType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const All: FunctionComponent<AllType> = ({
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

export default All;
