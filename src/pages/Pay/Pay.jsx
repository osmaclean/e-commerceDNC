import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./index.scss";

export default function Pay({ data }) {
  const { payId } = useParams();
  const selectedProduct = data.filter((product) => product.id == payId);

  return (
    <>
      <Header />
      <section className="container">
        <div className="container__boxLeft">
          <label className="container__label">Nome:</label>
          <input
            className="container__input"
            type="text"
            placeholder="Nome completo.."
            required
            autoComplete="off"
          />
          <label className="container__label">Endereço de entrega:</label>
          <input
            className="container__input"
            type="text"
            placeholder="Endereço.."
            required
            autoComplete="off"
          />
          <label className="container__label">Forma de Pagamento:</label>
          <label className="container__labelCheck">
            <input className="container__check" type="checkbox" required />
            Pix
          </label>
          <label className="container__labelCheck">
            <input className="container__check" type="checkbox" required />
            Boleto
          </label>
          <label className="container__labelCheck">
            <input className="container__check" type="checkbox" required />
            Cartão de Crédito
          </label>
          <button>Enviar Pedido</button>
        </div>
        <div className="container__boxRight">
          <div className="container__ticket">
            <h1>Resumo do Pedido:</h1>
            <section>
              <h3>Produtos:</h3>
              <h2>{selectedProduct[0].title}</h2>
            </section>
            <div></div>
            <section>
              <h3>Total</h3>
              <h2>{`R$ ` + selectedProduct[0].price}</h2>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
