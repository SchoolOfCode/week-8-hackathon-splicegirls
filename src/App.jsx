import PWABadge from "./PWABadge.jsx";
import { Header } from "./components/Header/Header.jsx";
import Form from "./components/Form/Form.jsx";
import Playlist from "./components/Playlist/Playlist.jsx";
import "./App.css";
import Randomiser from "./components/Randomiser/Randomiser.jsx";
import { AppProvider } from "./context/AppProvider.jsx";
import { FormAccordion } from "./components/Form/Accordian.jsx";

function App() {
  return (
    <main className="card">
      <AppProvider>
        <Header />
        <FormAccordion />
        <Randomiser />
        <Playlist />
        <PWABadge />
      </AppProvider>
    </main>
  );
}

export default App;
