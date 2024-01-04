import React from "react";
import { Card } from "react-bootstrap";
import "./ItemDetailContainer.css";

import { useParams } from "react-router-dom";
import { useSingleProduct } from "../hooks/useProducts";
import { ItemQuantitySelector } from "../components";

export const ItemDetailContainer = () => {
  const { productID } = useParams();
  const { product, loading, error } = useSingleProduct(productID);
  return (
    <div className="item-detail-container">
      <Card key={product.id} className=".item-detail-card">
        <Card.Img variant="top" src={product.thumbnail} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
        <ItemQuantitySelector />
      </Card>
    </div>
  );
};


