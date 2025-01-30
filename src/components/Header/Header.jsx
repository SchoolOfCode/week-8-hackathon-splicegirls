import appLogo from "/squats.png";
import headerStyles from "./Header.module.css";

export function Header() {
  return (
    <header>
      <img
        src={appLogo}
        className={headerStyles.logo}
        alt="Squats Song Form logo"
      />
      <h1> Squats Song Form</h1>
    </header>
  );
}
