import React from "react";
import ProductCard from "./product-card";

const Products = () => {
	return (
		<div>
			<h1>Children Prop</h1>

			<ProductCard title="Sony X5 Headset">
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Rem, voluptatem architecto accusantium amet dicta nulla
					cupiditate magnam libero dolorem adipisci nobis,
					voluptatibus perspiciatis dolores eaque beatae praesentium
					quam fugit quae.
				</p>
			</ProductCard>

			<ProductCard title="Samsung S7 Headset">
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Rem, voluptatem architecto accusantium amet dicta nulla
					cupiditate magnam libero dolorem adipisci nobis,
					voluptatibus perspiciatis dolores eaque beatae praesentium
					quam fugit quae.
				</p>
			</ProductCard>
		</div>
	);
};

export default Products;
