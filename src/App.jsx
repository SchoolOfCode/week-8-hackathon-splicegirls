import PWABadge from "./PWABadge.jsx";
import "./App.css";
import { Header } from "./components/Header/Header.jsx";

function App() {
  return (
    <main className="card">
      <Header />
      <PWABadge />
    </main>
  );
}

export default App;
