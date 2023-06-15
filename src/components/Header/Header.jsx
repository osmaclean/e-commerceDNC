import "./index.scss";
import dncLogo from "../../assets/logo-dnc.png";

export default function Header() {
  return (
    <div className="header">
      <figure>
        <img
          className="header__img"
          src={dncLogo}
          alt="Logotipo DNC"
          aria-label="Logotipo DNC"
        />
      </figure>
    </div>
  );
}
