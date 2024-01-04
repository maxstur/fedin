import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { NavBarComponent } from "../components";
import { Home, Category, ItemDetailContainer } from "../pages";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Router>
        <NavBarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:productId" element={<ItemDetailContainer />} />
          <Route path="/category/:categoryId" element={<Category />} />
        </Routes>
      </Router>
    </BrowserRouter>
  );
};
