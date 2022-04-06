import React from "react";

import Im from "../Im";

import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Im />
    </div>
  );
};

export default App;
