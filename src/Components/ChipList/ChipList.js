import React from "react";
import styles from "./ChipList.module.css";
import Chip from "../Chip/Chip";

const ChipList = ({ chipData }) => {
  return (
    <div className={styles.chipList}>
      {chipData.map((item, index) => (
        <div key={index}>
          <Chip chipTitle={item} />
        </div>
      ))}
    </div>
  );
};

export default ChipList;
