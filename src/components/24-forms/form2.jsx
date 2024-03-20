import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Form2 = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");

	const handleSubmit = (e) => {
		// Formun default submit davranisi devre disi birakildi
		e.preventDefault();

		// Form validation yapilir

		// Payload olusuturlur
		const payload = {
			firstName,
			lastName,
            phoneNumber,
            email,
            address
		};

        // Payload API a gonderilir
        console.log(payload)
		alert("Registration is completed");
	};

	return (
		<Container className="mt-3">
			<Form onSubmit={handleSubmit} noValidate>
				<Form.Group className="mb-3">
					<Form.Label>First Name</Form.Label>
					<Form.Control
						type="text"
						placeholder=""
                        minLength={5}
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Last Name</Form.Label>
					<Form.Control
						type="text"
						placeholder=""
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Phone Number</Form.Label>
					<Form.Control
						type="text"
						placeholder=""
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="name@example.com"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Address</Form.Label>
					<Form.Control
						as="textarea"
						rows={3}
						value={address}
						onChange={(e) => setAddress(e.target.value)}
					/>
				</Form.Group>

				<Button type="submit">Register</Button>
			</Form>
		</Container>
	);
};

export default Form2;
