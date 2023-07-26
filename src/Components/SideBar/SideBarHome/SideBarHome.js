import React from "react";
import styles from "./SideBarHome.module.css";

const SideBarHome = () => {
  return (
    <div className={styles.sideBar}>
      <div className={styles.sideBarContent}>
        <ul className={styles.home}>
          <img
            className={styles.sideBarIcons}
            src={require("../../../Assets/Icons/home_Icon.png")}
            alt=""
          />
          <span className={styles.sideBarHomeAndSearch}>Home</span>
        </ul>
        <ul className={styles.search}>
          <img
            className={styles.sideBarIcons}
            src={require("../../../Assets/Icons/seacrh_Icon.png")}
            alt=""
          />
          <span className={styles.sideBarHomeAndSearch}>Search</span>
        </ul>
      </div>
    </div>
  );
};

export default SideBarHome;
