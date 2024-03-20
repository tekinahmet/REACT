import React from "react";
import "./product-card.scss";

const ProductCard = (props) => {
	return (
		<div className="product-card">
			<h3>{props.title}</h3>
			{props.children}
		</div>
	);
};

export default ProductCard;
