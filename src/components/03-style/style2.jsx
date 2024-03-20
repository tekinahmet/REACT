import React from "react";

const Style2 = () => {
	const isBorderRadius = true;

	const titleStyle = {
		fontSize: "20px",
		color: "orange",
		textShadow: "3px 3px 5px black",
		backgroundColor: "gray",
		padding: "5px 10px",
		borderRadius: isBorderRadius ? "10px" : "0",
	};

	return (
		<div>
			<h1>STYLES</h1>

			<h2 style={titleStyle}>Internal Styles</h2>


			<h3 style={titleStyle}>Other styles</h3>
		</div>
	);
};

export default Style2;
