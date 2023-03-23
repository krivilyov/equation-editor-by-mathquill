import { addStyles, EditableMathField } from "react-mathquill";
import { useState } from "react";

import styles from "./EquationEditor.module.scss";

addStyles();

const EquationEditor = () => {
  const [latex, setLatex] = useState("\\frac{1}{\\sqrt{2}}\\cdot 2");

  return (
    <div className={styles.equationEditor}>
      <h1>Equation Editor</h1>
      <div className={styles.equationField}>
        <EditableMathField
          latex={latex}
          onChange={mathField => {
            setLatex(mathField.latex());
          }}
          config={{
            autoCommands: "pi theta sqrt sum prod alpha beta gamma rho",
            autoOperatorNames: "sin cos tan",
          }}
        />
      </div>
      <div className={styles.latexContainer}>
        <div className={styles.latexTitle}>Latex:</div>
        <div className={styles.latexValue}>{latex}</div>
      </div>
      <input type="text" onChange={e => setLatex(e.target.value)} />
    </div>
  );
};

export default EquationEditor;
