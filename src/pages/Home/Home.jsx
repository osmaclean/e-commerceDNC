import "./index.scss";
import { Link } from "react-router-dom";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";
import Search from "../../components/Search/Search";
import ProductsCard from "../../components/ProductsCard/ProductsCard";

export default function Home({ data }) {
  return (
    <div className="home">
      <HeaderMenu />
      <Search />
      <div className="home__products">
        {data.map((product) => (
          <ProductsCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}
