import { FunctionComponent } from "react";
import styles from "./BackgroundNumbersDefault.module.css";

export type BackgroundNumbersDefaultType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const BackgroundNumbersDefault: FunctionComponent<
  BackgroundNumbersDefaultType
> = ({ className = "", property1 = "Default" }) => {
  return (
    <div
      className={[styles.backgroundNumbersdefault, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.number}>1</div>
    </div>
  );
};

export default BackgroundNumbersDefault;
