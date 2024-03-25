import React, { useState } from "react";
import ProductList from "./product-list";
import NewProductForm from "./new-product-form";
import { Button, Container } from "react-bootstrap";
import EditProductForm from "./edit-product-form";

const ProductManager = () => {
	const [op, setOp] = useState(null); // new, edit, null
	const [currentProductId, setCurrentProductId] = useState(null);
	const [refreshList, setRefreshList] = useState(0);

	return (
		<Container className="mt-4">
			<Button
				className="mb-4"
				variant="info"
				onClick={() => setOp("new")}
			>
				New Product
			</Button>

			{op === "new" ? (
				<NewProductForm setOp={setOp} setRefreshList={setRefreshList} />
			) : null}

			{op === "edit" ? (
				<EditProductForm
					setOp={setOp}
					setRefreshList={setRefreshList}
					currentProductId={currentProductId}
				/>
			) : null}


			<ProductList
				refreshList={refreshList}
				setOp={setOp}
				setCurrentProductId={setCurrentProductId}
				setRefreshList={setRefreshList}
			/>
		</Container>
	);
};

export default ProductManager;
