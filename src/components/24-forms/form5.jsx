import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Form5 = () => {
	// Form bilgileri genelde tek bir state icinde saklanir.
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		phoneNumber: "",
		email: "",
		address: "",
		city: "35",
		newsletter: true,
	});

	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		// Formun default submit davranisi devre disi birakildi
		e.preventDefault();

		// Form validation yapilir
		const { firstName, lastName, email } = formData;

		try {
			if (!firstName || firstName.length < 2)
				throw new Error("Enter your firstname");
			if (!lastName) throw new Error("Enter your lastname");
			if (!email) throw new Error("Enter your email");

			const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

			if (!emailRegex.test(email)) throw new Error("Invalid email");

			// formData API a gonderilir
			console.table(formData);
			alert("Registration is completed");
		} catch (err) {
			alert(err.message);
		}
	};

	console.table(formData);
	return (
		<Container className="mt-3">
			<Form onSubmit={handleSubmit} noValidate>
				<Form.Group className="mb-3">
					<Form.Label>First Name</Form.Label>
					<Form.Control
						name="firstName"
						type="text"
						placeholder=""
						minLength={5}
						value={formData.firstName}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Last Name</Form.Label>
					<Form.Control
						name="lastName"
						type="text"
						placeholder=""
						value={formData.lastName}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Phone Number</Form.Label>
					<Form.Control
						name="phoneNumber"
						type="text"
						placeholder=""
						value={formData.phoneNumber}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						name="email"
						type="email"
						placeholder="name@example.com"
						value={formData.email}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Address</Form.Label>
					<Form.Control
						name="address"
						as="textarea"
						rows={3}
						value={formData.address}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>City</Form.Label>
					<Form.Select
						name="city"
						aria-label="Default select example"
						onChange={handleChange}
						value={formData.city}
					>
						<option>Select city</option>
						<option value="34">Istanbul</option>
						<option value="35">Izmir</option>
						<option value="36">Kars</option>
					</Form.Select>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Check
						type="checkbox"
						label="Register newsletter"
						name="newsletter"
						id="newsletter"
						checked={formData.newsletter}
						onChange={() =>
							setFormData((prev) => ({
								...prev,
								newsletter: !prev.newsletter,
							}))
						}
					/>
				</Form.Group>

				<Button type="submit">Register</Button>
			</Form>
		</Container>
	);
};

export default Form5;
