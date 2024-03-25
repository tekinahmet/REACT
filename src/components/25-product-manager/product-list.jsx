import React, { useEffect, useState } from "react";
import { Alert, Col, Row, Spinner } from "react-bootstrap";
import ProductCard from "./product-card";
import { fetchProducts } from "./api";

const ProductList = (props) => {
	const { refreshList, setOp, setCurrentProductId, setRefreshList } = props;
	const [products, setProducts] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const loadProducts = async () => {
			try {
				const data = await fetchProducts();
				setProducts(data);
			} catch (err) {
				console.log(err);
				setError(err);
			} finally {
				setLoading(false);
			}
		};

		loadProducts();
	}, [refreshList]);

	const errMessage = error ? (
		<Alert variant="danger">{error.message}</Alert>
	) : null;

	const loadingMessage = loading ? (
		<div className="text-center">
			<Spinner />
		</div>
	) : null;

	const productList = (
		<Row xs={1} sm={2} md={3} lg={4} className="g-4">
			{products.length <= 0 ? (
				<Alert variant="warning">No product found</Alert>
			) : null}
			{products.map((item) => (
				<Col key={item.id}>
					<ProductCard
						{...item}
						setOp={setOp}
						setCurrentProductId={setCurrentProductId}
						setRefreshList={setRefreshList}
					/>
				</Col>
			))}
		</Row>
	);

	return (
		<div>
			{loadingMessage}
			{errMessage}
			{productList}
		</div>
	);
};

export default ProductList;
