import React from "react";

const Jsx7 = () => {
    // Map methodunun for dongusu gibi kullanilisi
	return (
		<div>
			{[...new Array(10)].map((_, index) => (
				<p key={index}>Hello For Loooooop with Map</p>
			))}
		</div>
	);
};

export default Jsx7;
