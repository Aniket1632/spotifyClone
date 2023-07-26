import React, { useState } from "react";
import styles from "./PlayList.module.css";
import SingerCard from "../SingerCard/SingerCard";
import singerCardLogo1 from "../../Assets/Images/singer_Card_Logo1.jpeg";
import singerCardLogo2 from "../../Assets/Images/singer_Card_Logo2.jpeg";
import singerCardLogo3 from "../../Assets/Images/singer_Card_Logo3.jpeg";
import singerCardLogo4 from "../../Assets/Images/singer_Card_Logo4.jpeg";
import singerCardLogo5 from "../../Assets/Images/singer_Card_Logo5.jpeg";

const PlayList = ({ title, productArray }) => {
  return (
    <div className={styles.playList}>
      <div className={styles.playListText}>
        <span className={styles.title}>{title}</span>
        <span>Show all</span>
      </div>
      <div className={styles.singerData}>
        {productArray.map((item, index) => (
          <div key={index} className={styles.singerCard}>
            <SingerCard
              imageUrl={item.imageUrl}
              songName={item.songName}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayList;
