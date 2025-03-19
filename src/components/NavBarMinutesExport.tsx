import { FunctionComponent } from "react";
import styles from "./NavBarMinutesExport.module.css";

export type NavBarMinutesExportType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const NavBarMinutesExport: FunctionComponent<NavBarMinutesExportType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div
      className={[styles.navbarMinutesExport, className].join(" ")}
      data-property1={property1}
    >
      <img className={styles.navbarBlueButtonBackground} alt="" />
      <img className={styles.exportdefaultIcon} loading="lazy" alt="" />
    </div>
  );
};

export default NavBarMinutesExport;
