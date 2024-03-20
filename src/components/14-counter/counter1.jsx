import React, { useState } from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import { TfiPlus, TfiMinus } from "react-icons/tfi";
import { GrPowerReset } from "react-icons/gr";

const Counter1 = () => {
	const [counter, setCounter] = useState(0);
	//      getter     setter

	// React ayni anda setter ve getter in ic ice kullanilmasini tavsiye etmez
	// setCounter(counter + 1)    -> Bu tavsiye edilmez, cunku state in degismesini garanti etmez.

	// Bunun yerine 
    // setCounter((prev) => prev + 1)   --> Tavsiye ediliyor

	return (
		<Container className="mt-4">
			<ButtonGroup>
				<Button onClick={() => setCounter((prev) => prev + 1)}>
					<TfiPlus />
				</Button>
				<Button variant="secondary" disabled>
					{counter}
				</Button>
				<Button onClick={() => setCounter((prev) => prev - 1)}>
					<TfiMinus />
				</Button>
				<Button variant="danger" onClick={() => setCounter(0)}>
					<GrPowerReset />
				</Button>
			</ButtonGroup>
		</Container>
	);
};

export default Counter1;
