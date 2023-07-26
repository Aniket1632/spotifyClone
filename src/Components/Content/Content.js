import React from "react";
import styles from "./Content.module.css";
import SideBar from "../SideBar/SideBar";
import Player from "../Player/Player";

const Content = ({ children }) => {
  return (
    <div className={styles.spotify}>
      <div className={styles.spotifyContent}>
        <div className={styles.sideBar}>
          <SideBar />
        </div>
        <div className={styles.home}>{children}</div>
      </div>
      <Player />
    </div>
  );
};
export default Content;
