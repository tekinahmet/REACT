import React, { useState } from "react";
import ProductList from "./product-list";
import NewProductForm from "./new-product-form";
import { Button, Container } from "react-bootstrap";
import EditProductForm from "./edit-product-form";

const ProductManager = () => {
  const [op, setOp] = useState(null); // new, edit, null
  const [currentProductId, setCurrentProductId] = useState(null);
  const [created, setCreated] = useState(0);

  console.log(currentProductId);

  return (
    <Container className="mt-4">
      <Button className="mb-4" variant="info" onClick={() => setOp("new")}>
        New Product
      </Button>

      {op === "new" ? (
        <NewProductForm setOp={setOp} setCreated={setCreated} />
      ) : op === "edit" ? (
        <EditProductForm
          setOp={setOp}
          setCreated={setCreated}
          currentProductId={currentProductId}
        />
      ) : null}

      <ProductList
        created={created}
        setOp={setOp}
        setCurrentProductId={setCurrentProductId}
      />
    </Container>
  );
};

export default ProductManager;
