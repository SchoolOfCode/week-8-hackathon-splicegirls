import { useState } from "react";
import { useAppContext } from "../../context/AppProvider";
import classes from "./Form.module.css";

export default function Form() {
  const { addSong } = useAppContext();

  const [name, setName] = useState("");
  const [songTitle, setSongTitle] = useState("");
  const [link, setLink] = useState("");
  const [comment, setComment] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newSong = { name, songTitle, link, comment };
    addSong(newSong);

    setName("");
    setSongTitle("");
    setLink("");
    setComment("");
  }

  return (
    <div className={classes.FormContainer}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.formGroup}>
          <label htmlFor="name" className={classes.label}>
            Name:
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={classes.input}
          />
        </div>

        <div className={classes.formGroup}>
          <label htmlFor="songTitle" className={classes.label}>
            Song Title:
          </label>
          <input
            id="songTitle"
            type="text"
            value={songTitle}
            onChange={(e) => setSongTitle(e.target.value)}
            required
            className={classes.input}
          />
        </div>

        <div className={classes.formGroup}>
          <label htmlFor="link" className={classes.label}>
            Link:
          </label>
          <input
            id="link"
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
            className={classes.input}
          />
        </div>

        <div className={classes.formGroup}>
          <label htmlFor="comment" className={classes.label}>
            Comment:
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className={classes.textarea}
          />
        </div>

        <button type="submit" className={classes.FormButton}>
          Submit Song
        </button>
      </form>
    </div>
  );
}
