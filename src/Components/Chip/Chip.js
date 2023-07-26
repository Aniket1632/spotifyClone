import React from "react";
import styles from "./Chip.module.css";

const Chip = ({ chipTitle }) => {
  return (
    <div className={styles.chipContent}>
      <div className={styles.chipTitle}>{chipTitle}</div>
    </div>
  );
};

export default Chip;
