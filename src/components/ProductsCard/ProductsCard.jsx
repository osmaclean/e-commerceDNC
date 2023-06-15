import "./index.scss";
import { Link } from "react-router-dom";

export default function ProductsCard({ data }) {
  return (
    <div className="home__card">
      <img src={data.imgPath} alt="model" />
      <div className="home__card-description">
        <p>{data.title}</p>
        <span>{`R$ ` + data.price}</span>
        <button>
          <Link to={`/products/${data.id}`}>Comprar Look</Link>
        </button>
      </div>
    </div>
  );
}
