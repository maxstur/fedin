import React from "react";
import { useAllProducts } from "../hooks/useProducts";
import { ItemListContainer, LoaderComponent } from "../components";

export const Home = () => {
  const [products, loading, error] = useAllProducts([]);

  return (
    <div>
      {loading ? (
        <LoaderComponent />
      ) : error ? (
        <div>Atención: Hubo un error al cargar los productos</div>
      ) : (
        <ItemListContainer products={products} />
      )}
    </div>
  );
};
