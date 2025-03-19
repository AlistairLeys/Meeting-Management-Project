import { FunctionComponent } from "react";
import styles from "./NavBarMinutesExit.module.css";

export type NavBarMinutesExitType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const NavBarMinutesExit: FunctionComponent<NavBarMinutesExitType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div
      className={[styles.navbarMinutesExit, className].join(" ")}
      data-property1={property1}
    >
      <button className={styles.navbarBlueButtonBackground1} autoFocus={true}>
        <img
          className={styles.navbarBlueButtonBackground}
          alt=""
          loading="lazy"
          src="/navbar-blue-button-backgrounddefault1.svg"
        />
      </button>
      <img className={styles.backdefaultIcon} loading="lazy" alt="" />
    </div>
  );
};

export default NavBarMinutesExit;
