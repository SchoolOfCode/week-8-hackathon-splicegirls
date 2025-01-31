import { useAppContext } from "../../context/AppProvider";
import classes from './Playlist.module.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

export default function Playlist() {
  const { songs } = useAppContext();

  return (
    // <section className={classes.Container}>
    <>
      <Carousel>
        {songs.map((song, index) => (
          <Paper 
            key={index} 
            className={classes.Cards} 
            sx={{ backgroundColor:"#252525", color: "white", elevation: 0, borderRadius: "20px" }}
          >
            <p>Name: {song.name}</p>
            <p>Song Title: {song.songTitle}</p>
            <p>Link: {song.link}</p>
            <p>Comment: {song.comment}</p>
          </Paper>
        ))}
      </Carousel>
    {/* </section> */}
    </>
  );
}
