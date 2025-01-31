import { useState } from "react";
import { useAppContext } from "../../context/AppProvider";
import classes from "./Randomiser.module.css";

export default function Randomiser() {
  const { songs } = useAppContext();
  const [randomSong, setRandomSong] = useState({});

  function getRandomSong() {
    const index = Math.floor(Math.random() * songs.length);
    setRandomSong(songs[index]);
  }

  return (
    <section className={classes.RandomiserContainer}>
      {/* display random song */}
      <div>
        <p>
          <span className={classes.bold}>Name:</span> {randomSong.name}
        </p>
        <p>
          <span className={classes.bold}>Song Title:</span>{" "}
          {randomSong.songTitle}
        </p>
        <p>
          <span className={classes.bold}>Link:</span> {randomSong.link}
        </p>
        <p>
          <span className={classes.bold}>Comment:</span> {randomSong.comment}
        </p>
      </div>
      {/* click button to get random song */}
      <button
        onClick={() => getRandomSong()}
        className={classes.RandomiserButton}
      >
        Randomise!
      </button>
    </section>
  );
}
