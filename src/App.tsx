import React from "react";
import styles from "./App.module.css";
import { Header } from "./Header/Header";
import { BodyRoutes } from "./Routes/BodyRoutes";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.body}>
        <BodyRoutes />
      </div>
      <div className={styles.footer}></div>
    </div>
  );
}

export default App;
