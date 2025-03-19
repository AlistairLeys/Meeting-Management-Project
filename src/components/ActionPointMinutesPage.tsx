import { FunctionComponent } from "react";
import ButtonTickbox from "./ButtonTickbox";
import ActionPointText from "./ActionPointText";
import ButtonAllocatee from "./ButtonAllocatee";
import styles from "./ActionPointMinutesPage.module.css";

export type ActionPointMinutesPageType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const ActionPointMinutesPage: FunctionComponent<ActionPointMinutesPageType> = ({
  className = "",
  property1 = "Expanded",
}) => {
  return (
    <div
      className={[styles.actionPointminutesPage, className].join(" ")}
      data-property1={property1}
    >
      <ButtonTickbox property1="Expanded" />
      <ActionPointText
        property1="Default"
        actionPointText="Collate all of the previous minute meetings together and transfer them to the database"
      />
      <ButtonAllocatee property1="Default" />
    </div>
  );
};

export default ActionPointMinutesPage;
