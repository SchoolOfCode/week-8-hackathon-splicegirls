import { useState } from "react";
import { useAppContext } from "../../context/AppProvider";

export default function Randomiser() {
  const { songs } = useAppContext();
  const [randomSong, setRandomSong] = useState({});

  function getRandomSong() {
    const index = Math.floor(Math.random() * songs.length);
    setRandomSong(songs[index]);
  }

  return (
    <section>
      {/* display random song */}
      <div>
        <p>Name: {randomSong.name}</p>
        <p>Song Title: {randomSong.songTitle}</p>
        <p>Link: {randomSong.link}</p>
        <p>Comment: {randomSong.comment}</p>
      </div>
      {/* click button to get random song */}
      <button onClick={() => getRandomSong()}>Randomise!</button>
    </section>
  );
}
