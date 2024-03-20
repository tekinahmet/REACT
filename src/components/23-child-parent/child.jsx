import React from "react";
import { Button } from "react-bootstrap";

const Child = (props) => {
	const { counter, handleCounter } = props;
	const rnd = Math.floor(Math.random() * 10);
    
	return (
		<div>
			<Button onClick={() => handleCounter(rnd)}>
				Set Counter ( {counter} )
			</Button>
		</div>
	);
};

export default Child;
