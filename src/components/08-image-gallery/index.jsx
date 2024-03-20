import React from "react";
import data from "./image-data.json";
import "./index.scss";

const ImageGallery = () => {
	return (
		<div className="gallery">
			{data.map((item) => (
				<div key={item.id}>
					<img src={`img/${item.image}`} alt="image"/>
				</div>
			))}
		</div>
	);
};

export default ImageGallery;
