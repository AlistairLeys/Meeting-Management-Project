import { FunctionComponent } from "react";
import NavBarMinutesPage from "../components/NavBarMinutesPage";
import MinutesBox1 from "../components/MinutesBox1";
import Transcript1 from "../components/Transcript1";
import ChatBox from "../components/ChatBox";
import styles from "./MinutesFrame.module.css";

const MinutesFrame: FunctionComponent = () => {
  return (
    <div className={styles.minutesFrame}>
      <NavBarMinutesPage />
      <main className={styles.contentArea}>
        <div className={styles.meetings}>
          <MinutesBox1 property1="Expanded" />
          <Transcript1 collapsed={false} transcriptText="Transcript Body" />
        </div>
        <div className={styles.chatContainer}>
          <ChatBox collapsed />
        </div>
      </main>
    </div>
  );
};

export default MinutesFrame;
