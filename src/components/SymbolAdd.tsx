import { FunctionComponent } from "react";
import styles from "./SymbolAdd.module.css";

export type SymbolAddType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const SymbolAdd: FunctionComponent<SymbolAddType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <button
      className={[styles.symbolAdd, className].join(" ")}
      data-property1={property1}
    >
      <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
    </button>
  );
};

export default SymbolAdd;
