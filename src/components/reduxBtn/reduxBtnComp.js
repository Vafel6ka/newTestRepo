import React, { useState } from "react";
import styles from "./styles.module.scss";
const ReduxBtnComp = () => {
  const [number, setNumber] = useState(0);

  const handleClickPlus = () => {
    setNumber(number + 1);
  };

  const handleClickMinus = () => {
    setNumber(number - 1);
  };
  return (
    <div className={styles.container}>
      <p className={styles.number}>{number}</p>
      <div className={styles.btnContainer}>
        <button className={styles.btnPlus} onClick={handleClickPlus}>
          Plus
        </button>
        <button className={styles.btnMin} onClick={handleClickMinus}>
          Min
        </button>
      </div>
    </div>
  );
};

export default ReduxBtnComp;
