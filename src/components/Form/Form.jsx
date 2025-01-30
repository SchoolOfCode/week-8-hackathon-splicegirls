import { useState } from "react";
import { useAppContext } from "../../context/AppProvider";

export default function Form() {
  const { addSong } = useAppContext();

  // all the form states below
  const [name, setName] = useState("");
  const [songTitle, setSongTitle] = useState("");
  const [link, setLink] = useState("");
  const [comment, setComment] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newSong = { name, songTitle, link, comment };
    addSong(newSong);

    // set inputs back to empty
    setName("");
    setSongTitle("");
    setLink("");
    setComment("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Song Title:</label>
        <input
          type="text"
          value={songTitle}
          onChange={(e) => setSongTitle(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Link:</label>
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Comment:</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
