import React, { useState } from "react";
import Child from "./child";
import { Container } from "react-bootstrap";

const Parent = () => {
	const [counter, setCounter] = useState(0);

	const handleCounter = (val) => {
		if (val > 100 || val < 0) return;
		setCounter((prev) => prev + val);
	};

	return (
		<Container className="mt-4">
			<Child counter={counter} handleCounter={handleCounter} />
		</Container>
	);
};

export default Parent;
