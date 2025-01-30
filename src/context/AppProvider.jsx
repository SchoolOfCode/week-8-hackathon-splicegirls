import { createContext, useContext, useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/local-storage";

const AppContext = createContext();
export function AppProvider({ children }) {
  const [songs, setSongs] = useState(getLocalStorage("songs", []));

  function addSong(newSong) {
    setSongs((prevSongs) => [...prevSongs, newSong]);
  }

  useEffect(() => {
    setLocalStorage("songs", songs);
  }, [songs]);

  return (
    <AppContext.Provider value={{ songs, setSongs, addSong }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
