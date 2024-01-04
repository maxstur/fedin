import React, { useEffect, useState } from "react";
import { useAllproductsByFilter } from "../hooks/useProducts";
import { ItemListContainer } from "../components";
import { useParams } from "react-router-dom";

export const Category = () => {
  const { categoryId } = useParams();
  const { products } = useAllproductsByFilter(
    "products",
    categoryId,
    "category"
  );

  return <ItemListContainer products={products} />;
};
