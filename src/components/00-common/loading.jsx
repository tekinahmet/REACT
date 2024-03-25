import React from "react";
import { Container, Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <Container className="mt-4 text-center">
      <Spinner variant="primary" size="lg" />
    </Container>
  );
};

export default Loading;
