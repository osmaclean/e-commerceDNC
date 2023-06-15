import "./index.scss";
import { Link } from "react-router-dom";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";
import Search from "../../components/Search/Search";

export default function Home() {
  return (
    <div className="home">
      <HeaderMenu />
      <Search />
      {/* <div className="home__products" > => (
          <ProductsCard key={product.id} data={product} />
        ))}
      </div> */}
    </div>
  );
}
