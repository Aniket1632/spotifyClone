import React, { useState } from "react";
import styles from "./SongCard.module.css";

const SongCard = ({ singerName, imageUrl }) => {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <div
      className={styles.songCard}
      onMouseOver={() => setShowPlayer(true)}
      onMouseOut={() => setShowPlayer(false)}
    >
      <img className={styles.songCardLogo} src={imageUrl} alt="" />
      <span className={styles.songCardName}>{singerName}</span>
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

export default SongCard;
