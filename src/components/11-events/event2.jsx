import React from "react";
import { Button, Container } from "react-bootstrap";

const Event2 = () => {
	const sayHello = (name) => {
		alert(`Hello ${name}`);
	};

	// Eger event handler a bir parametre gonderilecekse bir araci fonksiyon ile gonderilir.

	return (
		<Container className="mt-3">
			<Button onClick={() => sayHello("John")}>Say Hello</Button>
		</Container>
	);
};

export default Event2;
