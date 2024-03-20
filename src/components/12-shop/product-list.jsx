import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import data from "./products.json";
import ProductCard from "./product-card";

const ProductList = () => {
	return (
		<Container className="my-4">
			<Row xs={1} sm={2} md={3} lg={4} className="g-4">
				{data.map((item) => (
					<Col key={item.id}>
						<ProductCard {...item} />
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default ProductList;
