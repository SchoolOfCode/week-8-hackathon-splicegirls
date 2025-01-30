export function getLocalStorage(songs) {
  const storedValue = localStorage.getItem(songs);
  return JSON.parse(storedValue);
}

export function setLocalStorage(songs, song) {
  localStorage.setItem(songs, JSON.stringify(song));
}
