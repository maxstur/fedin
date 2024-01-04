import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import { useAllProducts } from "./hooks/useProducts";

import { NavBarComponent, ItemListContainer, LoaderComponent } from "./components";
import { MainRouter } from "./routes";

const App = () => {
  const { products, loading, error } = useAllProducts();

  return (
    <div>
      <NavBarComponent />
      <MainRouter />
    </div>
  );
};
export default App;
