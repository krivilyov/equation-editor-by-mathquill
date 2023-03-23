import React from "react";
import EquationEditor from "./components/equation-editor/EquationEditor";

import styles from "./styles/App.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <EquationEditor />
      </div>
    </div>
  );
}

export default App;
