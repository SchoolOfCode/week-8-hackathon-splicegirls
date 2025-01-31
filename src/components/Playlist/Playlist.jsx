import { useAppContext } from "../../context/AppProvider";
import classes from "./Playlist.module.css";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

export default function Playlist() {
  const { songs } = useAppContext();

  return (
    // <section className={classes.Container}>
    <Carousel className={classes.Container}>
      {songs.map((song, index) => (
        <Paper key={index} className={classes.Cards}>
          <div className={classes.Row}>
            <label>Name:</label>
            <span>{song.name}</span>
          </div>
          <div className={classes.Row}>
            <label>Song Title:</label>
            <span>{song.songTitle}</span>
          </div>
          <div className={classes.Row}>
            <label>Link:</label>
            <span>{song.link}</span>
          </div>
          <div className={classes.Row}>
            <label>Comment:</label>
            <span>{song.comment}</span>
          </div>
        </Paper>
      ))}
    </Carousel>
    // </section>
  );
}
