import { FunctionComponent, useCallback } from "react";
import AttendeeNumbers1 from "./AttendeeNumbers1";
import Summary from "./Summary";
import ActionPointMinutesPage from "./ActionPointMinutesPage";
import AddActionPointText from "./AddActionPointText";
import styles from "./MinutesContentBox1.module.css";

export type MinutesContentBox1Type = {
  className?: string;
  showMinutesContentBox?: boolean;
  showActionPoints?: boolean;

  /** Variant props */
  property1?: string;
};

const MinutesContentBox1: FunctionComponent<MinutesContentBox1Type> = ({
  className = "",
  property1 = "Expanded",
  showMinutesContentBox,
  showActionPoints,
}) => {
  const onAccordionHeaderClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const element = event.target as HTMLElement;

      const accItem: HTMLElement =
        element.closest("[data-acc-item]") || element;
      const accContent = accItem.querySelector(
        "[data-acc-content]",
      ) as HTMLElement;
      const isOpen = accItem.hasAttribute("data-acc-open");
      const nextOuterSibling =
        accItem?.nextElementSibling ||
        (accItem?.parentElement?.nextElementSibling as HTMLElement);
      const prevOuterSibling =
        accItem?.previousElementSibling ||
        (accItem?.parentElement?.previousElementSibling as HTMLElement);
      const siblingContainerAccItem = accItem?.hasAttribute("data-acc-original")
        ? accItem?.nextElementSibling ||
          nextOuterSibling?.querySelector("[data-acc-item]") ||
          nextOuterSibling
        : accItem?.previousElementSibling ||
          prevOuterSibling?.querySelector("[data-acc-item]") ||
          prevOuterSibling;
      const siblingAccItem =
        (siblingContainerAccItem?.querySelector(
          "[data-acc-item]",
        ) as HTMLElement) || siblingContainerAccItem;

      if (!siblingAccItem) return;
      const originalDisplay = "flex";
      const siblingDisplay = "flex";

      const openStyleObject = {
        "grid-template-rows": "1fr",
      };
      const closeStyleObject = {
        "padding-top": "0px",
        "padding-bottom": "0px",
        "margin-bottom": "0px",
        "margin-top": "0px",
        "grid-template-rows": "0fr",
      };

      function applyStyles(
        element: HTMLElement,
        styleObject: Record<string, string>,
      ) {
        Object.assign(element.style, styleObject);
      }

      function removeStyles(
        element: HTMLElement,
        styleObject: Record<string, string>,
      ) {
        Object.keys(styleObject).forEach((key) => {
          element?.style.removeProperty(key);
        });
      }

      if (isOpen) {
        removeStyles(accContent, openStyleObject);
        applyStyles(accContent, closeStyleObject);

        setTimeout(() => {
          if (accItem) {
            accItem.style.display = "none";
            siblingAccItem.style.display = siblingDisplay;
          }
        }, 100);
      } else {
        if (accItem) {
          accItem.style.display = "none";
          siblingAccItem.style.display = originalDisplay;
        }
        const siblingAccContent = siblingAccItem?.querySelector(
          "[data-acc-content]",
        ) as HTMLElement;
        setTimeout(() => {
          removeStyles(siblingAccContent, closeStyleObject);
          applyStyles(siblingAccContent, openStyleObject);
        }, 1);
      }
    },
    [],
  );

  return (
    showMinutesContentBox && (
      <div
        className={[styles.minutesContentBox, className].join(" ")}
        data-acc-item
        data-acc-open
        data-acc-header
        data-acc-original
        data-acc-default-open
        onClick={onAccordionHeaderClick}
        data-property1={property1}
      >
        <div className={styles.title1}>
          <h4 className={styles.title}>Meeting title</h4>
          <div className={styles.lockattendees}>
            <img
              className={styles.lockIcon}
              loading="lazy"
              alt=""
              src="/lock.svg"
            />
            <AttendeeNumbers1 property1="Default" />
          </div>
        </div>
        <div className={styles.timeduration}>
          <div className={styles.time}>
            <h4 className={styles.title2}>Time</h4>
            <div className={styles.body}>11:53</div>
          </div>
          <div className={styles.duration}>
            <h4 className={styles.title3}>Duration</h4>
            <div className={styles.body1}>00:47</div>
          </div>
        </div>
        <Summary />
        <div className={styles.accordionContentaccordionDef} data-acc-content>
          <div className={styles.container}>
            {showActionPoints && (
              <div className={styles.actionPoints1}>
                <div className={styles.header}>
                  <div className={styles.actionPointsTitle}>Action points</div>
                </div>
                <div className={styles.actionPoints}>
                  <ActionPointMinutesPage property1="Expanded" />
                  <ActionPointMinutesPage property1="Expanded" />
                  <ActionPointMinutesPage property1="Expanded" />
                  <div className={styles.footer}>
                    <AddActionPointText
                      property1="Default"
                      actionPointText="Add action point"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default MinutesContentBox1;
