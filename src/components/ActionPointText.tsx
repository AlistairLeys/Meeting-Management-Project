import { FunctionComponent } from "react";
import styles from "./ActionPointText.module.css";

export type ActionPointTextType = {
  className?: string;
  actionPointText?: string;

  /** Variant props */
  property1?: string;
};

const ActionPointText: FunctionComponent<ActionPointTextType> = ({
  className = "",
  property1 = "Default",
  actionPointText = "Collate all of the previous minute meetings together and transfer them to the database",
}) => {
  return (
    <div
      className={[styles.actionPointText2, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.actionPointText1}>
        <div className={styles.actionPointText}>{actionPointText}</div>
      </div>
    </div>
  );
};

export default ActionPointText;
