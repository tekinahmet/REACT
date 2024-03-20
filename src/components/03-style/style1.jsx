import React from "react";

const Style1 = () => {

    const isBorderRadius = true;

    


	return (
		<div>
			<h1>STYLES</h1>

			<h2
				style={{
					fontSize: "20px",
					color: "greenyellow",
					textShadow: "3px 3px 5px black",
                    backgroundColor: "gray",
                    padding: "5px 10px",
                    borderRadius: isBorderRadius ? "10px" : "0"
				}}
			>
				Inline Styles
			</h2>
		</div>
	);
};

export default Style1;
