import { useAppContext } from "../../context/AppProvider";
import classes from './Playlist.module.css'

export default function Playlist() {
  const { songs } = useAppContext();

  return (
    <section className={classes.Container}>
      {songs.map((song, index) => (
        <ul key={index}>
          <p>Name: {song.name}</p>
          <p>Song Title: {song.songTitle}</p>
          <p>Link: {song.link}</p>
          <p>Comment: {song.comment}</p>
        </ul>
      ))}
    </section>
  );
}
