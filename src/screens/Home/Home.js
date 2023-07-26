import React, { useState } from "react";
import styles from "./Home.module.css";
import Content from "../../Components/Content/Content";
import SongCard from "../../Components/SongCard/SongCard";
import songLogo1 from "../../Assets/Images/song_Card_Logo1.jpg";
import songLogo2 from "../../Assets/Images/song_Card_Logo2.jpg";
import songLogo3 from "../../Assets/Images/song_Card_Logo3.png";
import songLogo4 from "../../Assets/Images/song_Card_Logo4.jpg";
import songLogo5 from "../../Assets/Images/song_Card_Logo7.jpg";
import songLogo6 from "../../Assets/Images/song_Card_Logo6.jpg";
import singerCardLogo1 from "../../Assets/Images/singer_Card_Logo1.jpeg";
import singerCardLogo2 from "../../Assets/Images/singer_Card_Logo2.jpeg";
import singerCardLogo3 from "../../Assets/Images/singer_Card_Logo3.jpeg";
import singerCardLogo4 from "../../Assets/Images/singer_Card_Logo4.jpeg";
import singerCardLogo5 from "../../Assets/Images/singer_Card_Logo5.jpeg";
import singerCardLogo6 from "../../Assets/Images/singer_Card_Logo6.jpeg";
import singerCardLogo7 from "../../Assets/Images/singer_Card_Logo7.jpeg";
import singerCardLogo8 from "../../Assets/Images/singer_Card_Logo8.jpeg";
import singerCardLogo9 from "../../Assets/Images/singer_Card_Logo9.jpeg";
import singerCardLogo10 from "../../Assets/Images/singer_Card_Logo10.jpeg";
import PlayList from "../../Components/PlayList/PlayList";

const Home = () => {
  const [songData, setSongData] = useState([
    {
      imageUrl: songLogo1,
      singerName: "Current",
    },
    {
      imageUrl: songLogo2,
      singerName: "KR$NA ALL SONG'S",
    },
    {
      imageUrl: songLogo3,
      singerName: "Liked Songs",
    },
    {
      imageUrl: songLogo4,
      singerName: "Call You Right Back,I'm in Therapy",
    },
    {
      imageUrl: songLogo5,
      singerName: "Talha Anjum",
    },
    {
      imageUrl: songLogo6,
      singerName: "SUPERVILLAIN",
    },
  ]);

  const [singerData, setSingerData] = useState([
    {
      imageUrl: singerCardLogo1,
      songName: "Pakistani Hip-Hop",
      description: "Rap gods of Pakistan Checkout new hip-hop... ",
    },
    {
      imageUrl: singerCardLogo2,
      songName: "Open Letter",
      description: "Talha Anjum",
    },
    {
      imageUrl: singerCardLogo3,
      songName: "jaiyash",
      description: "Artist",
    },
    {
      imageUrl: singerCardLogo4,
      songName: "Seedhe Maut",
      description: "Artist",
    },
    {
      imageUrl: singerCardLogo5,
      songName: "David Kushner",
      description: "Artist",
    },
  ]);

  const [singerData1, setSingerData1] = useState([
    {
      imageUrl: singerCardLogo6,
      songName: "Current",
      description: "By Aniket singh ",
    },
    {
      imageUrl: singerCardLogo7,
      songName: "only know you love her...",
      description: "By ducsmurf-us",
    },
    {
      imageUrl: singerCardLogo8,
      songName: "KR$NA ALL SONG'S",
      description: "kr$na songs,kr$na diss track...",
    },
    {
      imageUrl: singerCardLogo9,
      songName: "KR$NA",
      description: "Artist",
    },
    {
      imageUrl: singerCardLogo10,
      songName: "DaILY Mix 1",
      description: "KR$NA,Raftaar, Gravity and more ",
    },
  ]);

  return (
    <Content>
      <div className={styles.home}>
        <div className={styles.homeContent}>
          <div className={styles.homeHeader}>
            <div className={styles.headerLeft}>
              <img
                className={styles.lefttArrowIcon}
                src={require("../../Assets/Icons/left_Arrow_Icon.png")}
                alt=""
              />
              <img
                className={styles.rightArrowIcon}
                src={require("../../Assets/Icons/right_Arrow_Icon.png")}
                alt=""
              />
            </div>
            <div className={styles.headerRight}>
              <span className={styles.explore}>Explore Premium</span>
              <span className={styles.Install}>Install App</span>
            </div>
          </div>
          <div className={styles.homeScrollBar}>
            <span className={styles.goodAfternoon}>Good afternoon</span>
            <div className={styles.songData}>
              {songData.map((item, index) => (
                <div key={index} className={styles.songCard}>
                  <SongCard
                    imageUrl={item.imageUrl}
                    singerName={item.singerName}
                  />
                </div>
              ))}
            </div>
            <PlayList productArray={singerData} title="Jump back in" />
            <PlayList productArray={singerData1} title="Recently played" />
          </div>
        </div>
      </div>
    </Content>
  );
};

export default Home;
