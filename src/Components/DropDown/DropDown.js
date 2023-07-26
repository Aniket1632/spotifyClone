import React from "react";
import styles from "./DropDown.module.css";

const DropDown = ({ dropDownTitle }) => {
  return (
    <div>
      <select className={styles.dropDown} id="dropdown">
        <option className={styles.title} value="hello">
          {dropDownTitle}
        </option>
      </select>
    </div>
  );
};

export default DropDown;
