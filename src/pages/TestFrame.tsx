import { FunctionComponent } from "react";
import NavBarTestPage from "../components/NavBarTestPage";
import MinutesBox from "../components/MinutesBox";
import Transcript from "../components/Transcript";
import ChatBoxMinutes from "../components/ChatBoxMinutes";
import styles from "./TestFrame.module.css";

const TestFrame: FunctionComponent = () => {
  return (
    <div className={styles.testFrame}>
      <NavBarTestPage />
      <main className={styles.meetingsParent}>
        <div className={styles.meetings}>
          <MinutesBox property1="Expanded" />
          <Transcript collapsed={false} />
        </div>
        <ChatBoxMinutes collapsed={false} />
      </main>
    </div>
  );
};

export default TestFrame;
