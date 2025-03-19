import { FunctionComponent } from "react";
import styles from "./ButtonGroups.module.css";

export type ButtonGroupsType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const ButtonGroups: FunctionComponent<ButtonGroupsType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div
      className={[styles.buttonGroups, className].join(" ")}
      data-property1={property1}
    >
      <img className={styles.navbarBlueButtonBackground} alt="" />
      <img className={styles.groupsdefaultIcon} loading="lazy" alt="" />
    </div>
  );
};

export default ButtonGroups;
