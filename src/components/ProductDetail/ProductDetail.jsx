import { Link } from "react-router-dom";
import "./index.scss";

export default function ProductDetail({ data }) {
  return (
    <div className="product-detail">
      <div className="product-detail__left-side">
        <div className="product-detail__card">
          <img src={data.imgPathDetail} alt={data.title} />
          <p>{data.title}</p>
        </div>
        <div className="product-detail__description">
          <h1>Descrição</h1>
          <p>{data.title}</p>
        </div>
      </div>

      <div className="product-detail__right-side">
        <h1>Informações Sobre o Produto</h1>
        <h2>{`R$ ` + data.price}</h2>
        <p>
          Cor:{" "}
          {data.colors.length === 1
            ? data.colors.map((color, index) => (
                <span key={index}>{color}</span>
              ))
            : data.colors.map((color, index) =>
                index + 1 === data.colors.length ? (
                  <span key={index}>{color}</span>
                ) : (
                  <span key={index}>{color}, </span>
                )
              )}
        </p>
        <div className="product-detail__cube-colors">
          {data.colors.map((color) => (
            <div
              key={color}
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "10px",
                backgroundColor: color,
                transition: "opacity 0.3s ease-in-out",
                cursor: "pointer",
                border: "2px solid black",
              }}
              onMouseEnter={(e) => {
                e.target.style.opacity = 0.5;
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = 1;
              }}
            ></div>
          ))}
        </div>
        <p>Tamanho:</p>
        <div className="product-detail__sizes">
          {data.sizes.map((size) => (
            <span
              className="product-detail__h2"
              key={size}
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "10px",
                border: "2px solid black",
                padding: "20px",
                textTransform: "uppercase",
                transition: "opacity 0.3s ease-in-out",
                textAlign: "center",
                fontWeight: "600",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.target.style.opacity = 0.5;
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = 1;
              }}
            >
              {size}
            </span>
          ))}
        </div>

        <Link to={`/pay/${data.id}`}>
          <button>Finalizar Compra</button>
        </Link>
      </div>
    </div>
  );
}
