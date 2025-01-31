import { useAppContext } from "../../context/AppProvider";
import classes from './Form.module.css'

export default function Form() {
  const { addSong } = useAppContext();
  //No need to prevent default
  //No need to set up our formData
  // Function to handle form submission
  const handleSubmit = (formData) => {    
    // Extract form data and create a new song object
  const newSong = Object.fromEntries(formData); // Convert FormData to a plain object
    // Add the song to the context
    addSong(newSong);

    //No need to reset
  };

  return (
    <form onSubmit={handleSubmit} className={classes.FormContainer}>
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

      <button type="submit" className={classes.FormButton}>Submit</button>
    </form>
  );
}