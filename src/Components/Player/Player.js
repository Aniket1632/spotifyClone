import React from "react";
import styles from "./Player.module.css";

const Player = () => {
  return (
    <div className={styles.player}>
      <div className={styles.playerLeft}>
        <img
          className={styles.songIcon}
          src={require("../../Assets/Icons/song_Icon.jpeg")}
          alt=""
        />
        <ul className={styles.songName}>
          <li className={styles.song}>Kitse</li>
          <li className={styles.artist}>Nyn Music,Mohito</li>
        </ul>
        <div className={styles.Icons}>
          <img
            className={styles.likeIcon}
            src={require("../../Assets/Icons/like_Icon.png")}
            alt=""
          />
          <img
            className={styles.pictureInPictureIcon}
            src={require("../../Assets/Icons/picture_In_Picture_Icon.png")}
            alt=""
          />
        </div>
      </div>
      <ul className={styles.playerCenter}>
        <li className={styles.songPlayer}>
          <img
            className={styles.playerIcons}
            src={require("../../Assets/Icons/shuffle_Icon.png")}
            alt=""
          />
          <img
            className={styles.playerIcons}
            src={require("../../Assets/Icons/back_Icon.png")}
            alt=""
          />
          <div className={styles.musicPlayer}>
            <img src={require("../../Assets/Icons/player_Icon.png")} alt="" />
          </div>
          <img
            className={styles.playerIcons}
            src={require("../../Assets/Icons/next_Icon.png")}
            alt=""
          />
          <img
            className={styles.playerIcons}
            src={require("../../Assets/Icons/repeat_Icon.png")}
            alt=""
          />
        </li>
        <li>
          <div className={styles.bar}>
            <span className={styles.playerTime}>0.00</span>
            <span className={styles.songBar}></span>
            <span className={styles.playerTime}>3.25</span>
          </div>
        </li>
      </ul>
      <div className={styles.playerRight}>
        <img
          className={styles.playerRightIcons}
          src={require("../../Assets/Icons/box_Play_Icon.png")}
          alt=""
        />
        <img
          className={styles.playerRightIcons}
          src={require("../../Assets/Icons/lyrics_Icon.png")}
          alt=""
        />
        <img
          className={styles.playerRightIcons}
          src={require("../../Assets/Icons/queue_Icon.png")}
          alt=""
        />
        <img
          className={styles.playerRightIcons}
          src={require("../../Assets/Icons/connection_Icon.png")}
          alt=""
        />
        <img
          className={styles.playerRightIcons}
          src={require("../../Assets/Icons/volume_Icon.png")}
          alt=""
        />
        <div className={styles.volumeBar}></div>
      </div>
    </div>
  );
};

export default Player;
