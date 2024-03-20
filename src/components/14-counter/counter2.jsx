import React, { useState } from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import { TfiPlus, TfiMinus } from "react-icons/tfi";
import { GrPowerReset } from "react-icons/gr";

const Counter2 = () => {
	const [counter, setCounter] = useState(0);

	const counterUp = () => {
		if (counter >= 10) return;

		setCounter((prev) => prev + 1);
	};

	const counterDown = () => {
		if (counter <= 0) return;

		setCounter((prev) => prev - 1);
	};

	return (
		<Container className="mt-4">
			<ButtonGroup>
				<Button onClick={counterUp}>
					<TfiPlus />
				</Button>
				<Button variant="secondary" disabled>
					{counter}
				</Button>
				<Button onClick={counterDown}>
					<TfiMinus />
				</Button>
				<Button variant="danger" onClick={() => setCounter(0)}>
					<GrPowerReset />
				</Button>
			</ButtonGroup>
		</Container>
	);
};

export default Counter2;
