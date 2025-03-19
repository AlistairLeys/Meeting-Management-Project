import { FunctionComponent } from "react";
import SymbolAdd from "./SymbolAdd";
import styles from "./AddActionPointText.module.css";

export type AddActionPointTextType = {
  className?: string;
  actionPointText?: string;

  /** Variant props */
  property1?: string;
};

const AddActionPointText: FunctionComponent<AddActionPointTextType> = ({
  className = "",
  property1 = "Default",
  actionPointText = "Add action point",
}) => {
  return (
    <div
      className={[styles.addActionPointText, className].join(" ")}
      data-property1={property1}
    >
      <SymbolAdd property1="Default" />
      <div className={styles.actionPointText}>
        <div className={styles.addActionPoint}>{actionPointText}</div>
      </div>
    </div>
  );
};

export default AddActionPointText;
