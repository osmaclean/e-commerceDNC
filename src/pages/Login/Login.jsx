import "./index.scss";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

export default function Login() {
  return (
    <section className="login">
      <Header />
      <form className="login__form">
        <h1>Acesse com seu login ou cadastre-se!</h1>
        <h2>você pode entrar com o seu CPF</h2>
        <div className="login__input-wrapper">
          <label htmlFor="name">Digite seu CPF:</label>
          <input
            autoComplete="off"
            type="text"
            placeholder="Nome completo"
            id="name"
            className="login__input-name"
          />
          <label htmlFor="password">Senha:</label>
          <input
            autoComplete="off"
            type="password"
            id="password"
            placeholder="********"
          />
        </div>
        <Link to={"/home"}>
          <button type="submit">Entrar</button>
        </Link>
      </form>
    </section>
  );
}
