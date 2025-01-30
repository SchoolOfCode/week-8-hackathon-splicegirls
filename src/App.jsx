import PWABadge from "./PWABadge.jsx";
import { Header } from "./components/Header/Header.jsx";
import Form from "./components/Form/Form.jsx";
import Playlist from "./components/Playlist/Playlist.jsx";
import "./App.css";
import Randomiser from "./components/Randomiser/Randomiser.jsx";

function App() {
  return (
    <main className="card">
      <Header />
      <Randomiser />
      <Form />
      <Playlist />
      <PWABadge />
    </main>
  );
}

export default App;
