import React from "react";
import { Alert, Container } from "react-bootstrap";

const ErrorMessage = ({ children }) => {
  return (
    <Container className="mt-4">
      <Alert variant="danger">{children || "Something went wrong"}</Alert>
    </Container>
  );
};

export default ErrorMessage;
