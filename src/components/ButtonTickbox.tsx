import { FunctionComponent } from "react";
import styles from "./ButtonTickbox.module.css";

export type ButtonTickboxType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const ButtonTickbox: FunctionComponent<ButtonTickboxType> = ({
  className = "",
  property1 = "Expanded",
}) => {
  return (
    <div
      className={[styles.buttonTickbox, className].join(" ")}
      data-property1={property1}
    >
      <input className={styles.tickboxdefault} type="checkbox" />
    </div>
  );
};

export default ButtonTickbox;
