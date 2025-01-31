

import { useAppContext } from "../../context/AppProvider";

export default function Form() {
  const { addSong } = useAppContext();

  // Function to handle form submission
  function handleSubmit(formData) {
    const name = formData.get("name");
    const songTitle = formData.get("songTitle");
    const link = formData.get("link");
    const comment = formData.get("comment");
    console.log(name, songTitle, link, comment)

    // Create a new song object
    const newSong = { name, songTitle, link, comment };

    // Add the song to the context
    addSong(newSong);
  }

  return (
    <form action={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Your name"
          required
        />
      </div>

      <div>
        <label htmlFor="songTitle">Song Title:</label>
        <input
          id="songTitle"
          type="text"
          name="songTitle"
          placeholder="Song title"
          required
        />
      </div>

      <div>
        <label htmlFor="link">Link:</label>
        <input
          id="link"
          type="text"
          name="link"
          placeholder="Song link"
          required
        />
      </div>

      <div>
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          name="comment"
          placeholder="Your comment"
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}