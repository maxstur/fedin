import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ItemListContainer.css";

export const ItemListContainer = ({ products }) => {
  return (
    <div className="item-list-container">
      {products.map((product) => {
        return (
          <Card
            key={product.id}
            style={{ width: "18rem", margin: "1rem", marginTop: "2rem", height: "28rem", overflow: "hidden" }}
          >
            <Link to={`/item/${product.id}`}>
              <Card.Img variant="top" src={product.thumbnail} />
            </Link>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};


