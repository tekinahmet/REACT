import React from "react";
import { Button, Card } from "react-bootstrap";

const ProductCard = (props) => {
  const { id, image, title, desc, price, setOp, setCurrentProductId } = props;

  const handleClick = () => {
    setCurrentProductId(id);
    setOp("edit");
  };

  return (
    <Card className="text-center" onClick={handleClick}>
      <Card.Body>
        <Card.Img variant="top" src={image} />
        <Card.Title className="mt-4">{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Card.Subtitle>${price}</Card.Subtitle>
        <Button variant="info" className="mt-3">
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
