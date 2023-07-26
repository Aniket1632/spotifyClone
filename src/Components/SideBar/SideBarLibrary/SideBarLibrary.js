import React, { useState } from "react";
import styles from "./SideBarLibrary.module.css";
import ChipList from "../../ChipList/ChipList";
import DropDown from "../../DropDown/DropDown";
import ArtistCard from "../../ArtistCard/ArtistCard";
import artistLogo1 from "../../../Assets/Images/artist_Logo1.jpeg";
import artistLogo2 from "../../../Assets/Images/artist_logo2.jpeg";
import artistLogo3 from "../../../Assets/Images/artits_logo3.jpeg";
import artistLogo4 from "../../../Assets/Images/artist_logo4.jpeg";
import artistLogo5 from "../../../Assets/Images/artist_logo5.jpeg";
import artistLogo6 from "../../../Assets/Images/artist_logo6.jpeg";
import artistLogo7 from "../../../Assets/Images/artist_logo7.jpeg";
import artistLogo8 from "../../../Assets/Images/artist_logo8.jpeg";
import artistLogo9 from "../../../Assets/Images/artist_logo9.jpeg";
import artistLogo10 from "../../../Assets/Images/artist_logo10.jpeg";
import artistLogo11 from "../../../Assets/Images/artist_logo11.jpeg";
import artistLogo12 from "../../../Assets/Images/artist_logo12.jpeg";
import artistLogo13 from "../../../Assets/Images/artist_logo13.jpeg";

const SideBarLibrary = () => {
  const [chipData, setChipData] = useState([
    "Playlists",
    "Artist",
    "Albums",
    "Podcast...",
  ]);

  const [artistData, setArtistData] = useState([
    {
      imageUrl: artistLogo1,
      artistName: "XXXTENTACION",
    },
    {
      imageUrl: artistLogo2,
      artistName: "KR$NA",
    },
    {
      imageUrl: artistLogo3,
      artistName: "King",
    },
    {
      imageUrl: artistLogo4,
      artistName: "Drake",
    },
    {
      imageUrl: artistLogo5,
      artistName: "Travis Scott",
    },
    {
      imageUrl: artistLogo6,
      artistName: "Raftaar",
    },
    {
      imageUrl: artistLogo7,
      artistName: "21 Savage",
    },
    {
      imageUrl: artistLogo8,
      artistName: "Talha Anjum",
    },
    {
      imageUrl: artistLogo9,
      artistName: "Seedhe Maut",
    },
    {
      imageUrl: artistLogo10,
      artistName: "jaiyash",
    },
    {
      imageUrl: artistLogo11,
      artistName: "Arpit Bala",
    },
    {
      imageUrl: artistLogo12,
      artistName: "The Kid LAROI",
    },
    {
      imageUrl: artistLogo13,
      artistName: "Lil Peep",
    },
  ]);

  return (
    <div className={styles.sideBarLibrary}>
      <div className={styles.sideBarContent}>
        <div className={styles.yourLibrary}>
          <img
            className={styles.sideBarIcon}
            src={require("../../../Assets/Icons/library_Icon.png")}
            alt=""
          />
          <span className={styles.SideBarYourLibrary}>Your Library</span>
          <div className={styles.playlistCreateButton}>
            <img src={require("../../../Assets/Icons/plus_Icon.png")} alt="" />
            <img src={require("../../../Assets/Icons/arrow_Icon.png")} alt="" />
          </div>
        </div>
        <div className={styles.chipList}>
          <ChipList chipData={chipData} />
        </div>
        <div className={styles.searchInLibrary}>
          <img src={require("../../../Assets/Icons/seacrh_Icon.png")} alt="" />
          <div className={styles.dropDown}>
            <DropDown dropDownTitle="Recents" />
          </div>
        </div>
        <div className={styles.artistData}>
          {artistData.map((item, index) => (
            <div key={index} className={styles.artistCard}>
              <ArtistCard
                imageUrl={item.imageUrl}
                artistName={item.artistName}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBarLibrary;
