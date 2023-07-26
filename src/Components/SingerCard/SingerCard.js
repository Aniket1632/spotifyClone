import React, { useState } from "react";
import styles from "./SingerCard.module.css";

const SingerCard = ({ songName, description, imageUrl }) => {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <div
      className={styles.singerCard}
      onMouseOver={() => setShowPlayer(true)}
      onMouseOut={() => setShowPlayer(false)}
    >
      <img className={styles.singerCardLogo} src={imageUrl} alt="" />
      <span className={styles.songName}>{songName}</span>
      <span className={styles.description}>{description}</span>
      {showPlayer && (
        <div className={styles.player}>
          <img
            className={styles.playerIcon}
            src={require("../../Assets/Icons/player_Icon.png")}
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default SingerCard;
