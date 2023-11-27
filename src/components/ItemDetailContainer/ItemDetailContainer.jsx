import React from "react";
import { Card } from "react-bootstrap";
import "./ItemDetailContainer.css";

const ItemDetailContainer = ({ product }) => {
  return (
    <div className="item-detail-container">
      <Card key={product.id} className=".item-detail-card">
        <Card.Img variant="top" src={product.thumbnail} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetailContainer;
