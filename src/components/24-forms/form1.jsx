import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";

const Form1 = () => {
	const [name, setName] = useState("Ali");

	return (
		<Container className="mt-4">
			<h2>{name}</h2>

			<Form>
				{/* Controlled Input: Belli bir state e bagli olan input */}
				<Form.Control
					value={name}
					placeholder="Type your name"
					onChange={(e) => setName(e.target.value)}
				/>

				{/* UNControlled Input: UseRef hook u ile kullanilabilir */}
				<Form.Control
					defaultValue="asd"
					placeholder="Type your number"
				/>
			</Form>
		</Container>
	);
};

export default Form1;
