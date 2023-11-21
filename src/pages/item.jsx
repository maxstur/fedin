import React, { useEffect, useState } from "react";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import axios from "axios";
import { useParams } from "react-router-dom";

const item = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return <ItemDetailContainer />;
};

export default item;
