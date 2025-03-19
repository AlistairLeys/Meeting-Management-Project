import { FunctionComponent } from "react";
import CopyDefault from "./CopyDefault";
import styles from "./ButtonCopy.module.css";

export type ButtonCopyType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const ButtonCopy: FunctionComponent<ButtonCopyType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div
      className={[styles.buttonCopy, className].join(" ")}
      data-property1={property1}
    >
      <CopyDefault property1="Default" />
    </div>
  );
};

export default ButtonCopy;
