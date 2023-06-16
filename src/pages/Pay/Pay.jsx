import Header from "../../components/Header/Header";
import "./index.scss";

export default function Pay({ data }) {
  return (
    <section className="container">
      <Header />
      <div className="container__boxLeft">
        <label>Nome:</label>
        <input
          type="text"
          placeholder="Nome completo.."
          required
          autoComplete="off"
        />
        <label>Endereço de entrega:</label>
        <input
          type="text"
          placeholder="Endereço.."
          required
          autoComplete="off"
        />
        <label>Forma de Pagamento:</label>
        <label>
          <input type="checkbox" required />
          Pix
        </label>
        <label>
          <input type="checkbox" required />
          Boleto
        </label>
        <label>
          <input type="checkbox" required />
          Cartão de Crédito
        </label>
        <button>Enviar Pedido</button>
      </div>
      <div className="container__boxRight"></div>
    </section>
  );
}
