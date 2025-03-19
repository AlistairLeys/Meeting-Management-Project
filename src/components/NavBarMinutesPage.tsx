import { FunctionComponent } from "react";
import AppTitle from "./AppTitle";
import styles from "./NavBarMinutesPage.module.css";

export type NavBarMinutesPageType = {
  className?: string;
};

const NavBarMinutesPage: FunctionComponent<NavBarMinutesPageType> = ({
  className = "",
}) => {
  return (
    <header className={[styles.navBarminutesPage, className].join(" ")}>
      <div className={styles.navIcons}>
        <button className={styles.buttonBack}>
          <div className={styles.icon}>
            <img
              className={styles.defaultArrowIcon}
              loading="lazy"
              alt=""
              src="/default-arrow.svg"
            />
          </div>
        </button>
        <button className={styles.buttonBack}>
          <div className={styles.icon1}>
            <img
              className={styles.vectorIcon}
              loading="lazy"
              alt=""
              src="/vector1.svg"
            />
          </div>
        </button>
        <button className={styles.buttonBack}>
          <div className={styles.icon2}>
            <img
              className={styles.vectorIcon1}
              loading="lazy"
              alt=""
              src="/vector-11.svg"
            />
            <img
              className={styles.vectorIcon2}
              loading="lazy"
              alt=""
              src="/vector-2.svg"
            />
          </div>
        </button>
      </div>
      <AppTitle />
    </header>
  );
};

export default NavBarMinutesPage;
