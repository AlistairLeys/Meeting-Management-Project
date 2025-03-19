import { FunctionComponent } from "react";
import MinutesContentBox from "./MinutesContentBox";
import styles from "./MinutesBox.module.css";

export type MinutesBoxType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const MinutesBox: FunctionComponent<MinutesBoxType> = ({
  className = "",
  property1 = "Expanded",
}) => {
  return (
    <div
      className={[styles.minutesBox, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.minutesFrame}>
        <div className={styles.header}>
          <div className={styles.chatTitle1}>
            <h2 className={styles.chatTitle}>minutes</h2>
          </div>
          <div className={styles.dateAndArrow}>
            <div className={styles.date}>
              <div className={styles.dd}>21</div>
              <div className={styles.mm}>01</div>
              <div className={styles.yy}>25</div>
            </div>
            <img
              className={styles.bigArrowDown}
              loading="lazy"
              alt=""
              src="/big-arrow-down.svg"
            />
          </div>
        </div>
        <div className={styles.minutes5}>
          <MinutesContentBox property1="Expanded" />
          <div className={styles.minutesContentBox}>
            <div className={styles.time}>
              <div className={styles.titleParent}>
                <div className={styles.title}>Time</div>
                <input
                  className={styles.title1}
                  placeholder="00:00"
                  type="text"
                />
              </div>
            </div>
            <div className={styles.duration}>
              <div className={styles.title2}>Duration</div>
              <input
                className={styles.title3}
                placeholder="00:00"
                type="text"
              />
            </div>
          </div>
          <div className={styles.minutesContentBox1}>
            <div className={styles.header1}>
              <div className={styles.minutesTitle1}>
                <div className={styles.minutesTitle}>Summary</div>
              </div>
              <div className={styles.dateAndArrow1} />
            </div>
            <div className={styles.minutes}>
              <div className={styles.questionText}>
                <div
                  className={styles.textTextText}
                >{`Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text `}</div>
              </div>
            </div>
          </div>
          <div className={styles.minutesContentBox2}>
            <div className={styles.header2}>
              <div className={styles.minutesTitle3}>
                <div className={styles.minutesTitle2}>Action points</div>
              </div>
              <div className={styles.dateAndArrow2} />
            </div>
            <div className={styles.minutes1}>
              <div className={styles.questionText1}>
                <div className={styles.textTextTextContainer}>
                  <ol className={styles.textTextTextText}>
                    <li>{`Text Text Text Text `}</li>
                  </ol>
                </div>
                <img
                  className={styles.questionTextChild}
                  loading="lazy"
                  alt=""
                  src="/frame-8.svg"
                />
              </div>
            </div>
            <div className={styles.minutes2}>
              <div className={styles.questionText2}>
                <div className={styles.textTextTextContainer1}>
                  <ol className={styles.textTextTextText1}>
                    <li>{`Text Text Text Text `}</li>
                  </ol>
                </div>
                <div className={styles.vectorWrapper}>
                  <img
                    className={styles.vectorIcon}
                    loading="lazy"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.minutes3}>
              <div className={styles.questionText3}>
                <div className={styles.textTextTextContainer2}>
                  <ol className={styles.textTextTextText2}>
                    <li>{`Text Text Text Text `}</li>
                  </ol>
                </div>
                <img
                  className={styles.questionTextItem}
                  loading="lazy"
                  alt=""
                  src="/frame-8.svg"
                />
              </div>
            </div>
            <div className={styles.minutes4}>
              <div className={styles.questionText4}>
                <div className={styles.textTextTextContainer3}>
                  <ol className={styles.textTextTextText3}>
                    <li>{`Text Text Text Text `}</li>
                  </ol>
                </div>
                <div className={styles.vectorContainer}>
                  <img
                    className={styles.vectorIcon1}
                    loading="lazy"
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinutesBox;
