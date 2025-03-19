import { FunctionComponent } from "react";
import ButtonRecord from "./ButtonRecord";
import styles from "./NavBarTestPage.module.css";

export type NavBarTestPageType = {
  className?: string;
};

const NavBarTestPage: FunctionComponent<NavBarTestPageType> = ({
  className = "",
}) => {
  return (
    <header className={[styles.navBartestPage, className].join(" ")}>
      <ButtonRecord property1="Default" />
      <div className={styles.appTitle}>
        <h1 className={styles.slogan}>welcome future</h1>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo.svg"
        />
      </div>
    </header>
  );
};

export default NavBarTestPage;
