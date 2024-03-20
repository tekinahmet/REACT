import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Form3 = () => {
	// Form bilgileri genelde tek bir state icinde saklanir.
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		phoneNumber: "",
		email: "",
		address: "",
	});

	console.log(formData);

	const handleSubmit = (e) => {
		// Formun default submit davranisi devre disi birakildi
		e.preventDefault();

		// Form validation yapilir

		// formData API a gonderilir
		console.table(formData);
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
						value={formData.firstName}
						onChange={(e) =>
							setFormData({
								...formData,
								firstName: e.target.value,
							})
						}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Last Name</Form.Label>
					<Form.Control
						type="text"
						placeholder=""
						value={formData.lastName}
						onChange={(e) =>
							setFormData({
								...formData,
								lastName: e.target.value,
							})
						}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Phone Number</Form.Label>
					<Form.Control
						type="text"
						placeholder=""
						value={formData.phoneNumber}
						onChange={(e) =>
							setFormData({
								...formData,
								phoneNumber: e.target.value,
							})
						}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="name@example.com"
						value={formData.email}
						onChange={(e) =>
							setFormData({
								...formData,
								email: e.target.value,
							})
						}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Address</Form.Label>
					<Form.Control
						as="textarea"
						rows={3}
						value={formData.address}
						onChange={(e) =>
							setFormData({
								...formData,
								address: e.target.value,
							})
						}
					/>
				</Form.Group>

				<Button type="submit">Register</Button>
			</Form>
		</Container>
	);
};

export default Form3;
