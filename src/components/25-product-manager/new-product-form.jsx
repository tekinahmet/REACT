import { useFormik } from "formik";
import React, { useState } from "react";
import { Alert, Button, Card, Col, Form, Row, Spinner } from "react-bootstrap";
import * as Yup from "yup";
import { createProduct } from "./api";

const NewProductForm = ({ setOp, setCreated }) => {
  const [error, setError] = useState(null);

  const initialValues = {
    title: "",
    price: "",
    category: "",
    description: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().max(50, "Max 50 chars").required("Required"),
    price: Yup.number().min(0, "Cannot be negative").required("Required"),
    category: Yup.string().max(20, "Max 20 chars").required("Required"),
    description: Yup.string().max(200, "Max 200 chars").required("Required"),
  });

  const onSubmit = async (values) => {
    try {
      await createProduct(values);
      setOp(null);
      setCreated(Math.random());
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Card className="mb-4">
      <Card.Body>
        {error ? <Alert className="mb-4">{error.message}</Alert> : null}
        <Form noValidate onSubmit={formik.handleSubmit}>
          <Row>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  {...formik.getFieldProps("title")}
                  isInvalid={formik.touched.title && formik.errors.title}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.title}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  {...formik.getFieldProps("price")}
                  isInvalid={formik.touched.price && formik.errors.price}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.price}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  {...formik.getFieldProps("category")}
                  isInvalid={formik.touched.category && formik.errors.category}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.category}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  {...formik.getFieldProps("description")}
                  isInvalid={
                    formik.touched.description && formik.errors.description
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.description}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <div className="d-flex justify-content-between ">
            <Button variant="secondary" onClick={() => setOp(null)}>
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={
                formik.isSubmitting || !(formik.dirty && formik.isValid)
              }
            >
              {formik.isSubmitting ? <Spinner size="sm" /> : "Create"}
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default NewProductForm;
