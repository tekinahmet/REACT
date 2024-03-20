import React from "react";

const Welcome = (props) => {
	return (
		<div style={{color: props.color}}>
			<h2>
				Welcome {props.firstName} {props.lastName}
			</h2>
		</div>
	);
};

export default Welcome;
