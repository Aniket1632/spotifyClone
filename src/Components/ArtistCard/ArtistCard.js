import React from "react";
import styles from "./ArtistCard.module.css";

const ArtistCard = ({ imageUrl, artistName }) => {
  return (
    <div className={styles.artistCard}>
      <img src={imageUrl} alt="" />
      <ul className={styles.artistName}>
        <li className={styles.name}>{artistName}</li>
        <li className={styles.artist}>Artist</li>
      </ul>
    </div>
  );
};

export default ArtistCard;
