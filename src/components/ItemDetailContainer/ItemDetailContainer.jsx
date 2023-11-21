import React from "react";
import { Card } from "react-bootstrap";

const ItemDetailContainer = ({ product }) => {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row wrap",
        width: "80%",
        margin: "auto",
        justifyContent: "center",
      }}
    >
      <Card
        key={product.id}
        style={{ width: "28rem", margin: "2rem", height: "35rem", overflow: "hidden" }}
      >
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
