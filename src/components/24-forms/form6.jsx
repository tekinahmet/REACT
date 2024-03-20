import { useFormik } from "formik";
import React from "react";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import * as Yup from "yup";

const API_URL = "https://65775f19197926adf62e1c85.mockapi.io/api/v1/users";

const Form6 = () => {
	const initialValues = {
		firstName: "",
		lastName: "",
		phoneNumber: "",
		email: "",
		address: "",
		city: "35",
		newsletter: true,
	};

	const validationSchema = Yup.object({
		firstName: Yup.string()
			.min(2, "Min 2 chars")
			.max(15, "Max 15 chars")
			.required("Required"),
		lastName: Yup.string().required("Required"),
		email: Yup.string().email("Invalid").required("Required"),
	});

	const onSubmit = async (values) => {
		console.log(values)
		try {
			const resp = await fetch(API_URL, {
				method: "post",
				body: JSON.stringify(values),
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (!resp.ok) throw new Error("Something went wrong");

			alert("Registration is successful");
			formik.resetForm();
		} catch (err) {
			console.log(err);
		}
	};

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit,
	});


	console.table(formik.values)


	return (
		<Container className="mt-3">
			<Form onSubmit={formik.handleSubmit} noValidate>
				<Form.Group className="mb-3">
					<Form.Label>First Name</Form.Label>
					<Form.Control
						type="text"
						placeholder=""
						{...formik.getFieldProps("firstName")}
						isInvalid={
							formik.touched.firstName &&
							!!formik.errors.firstName
						}
						isValid={
							formik.touched.firstName && !formik.errors.firstName
						}
						/* name="firstName"
						value={formik.values.firstName}
						onChange={formik.handleChange} */
					/>
					<Form.Control.Feedback type="invalid">
						{formik.errors.firstName}
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Last Name</Form.Label>
					<Form.Control
						type="text"
						placeholder=""
						{...formik.getFieldProps("lastName")}
						isInvalid={
							formik.touched.lastName && !!formik.errors.lastName
						}
						isValid={
							formik.touched.lastName && !formik.errors.lastName
						}
					/>
					<Form.Control.Feedback type="invalid">
						{formik.errors.lastName}
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Phone Number</Form.Label>
					<Form.Control
						type="text"
						placeholder=""
						{...formik.getFieldProps("phoneNumber")}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="name@example.com"
						{...formik.getFieldProps("email")}
						isInvalid={
							formik.touched.email && !!formik.errors.email
						}
						isValid={formik.touched.email && !formik.errors.email}
					/>
					<Form.Control.Feedback type="invalid">
						{formik.errors.email}
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Address</Form.Label>
					<Form.Control
						{...formik.getFieldProps("address")}
						as="textarea"
						rows={3}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>City</Form.Label>
					<Form.Select
						aria-label="Default select example"
						{...formik.getFieldProps("city")}
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
						id="newsletter"
						checked={formik.values.newsletter}
						onChange={() =>
							formik.setFieldValue(
								"newsletter",
								!formik.values.newsletter
							)
						}
					/>
				</Form.Group>

				<Button
					type="submit"
					disabled={
						formik.isSubmitting || !(formik.dirty && formik.isValid)
					}
				>
					{formik.isSubmitting ? <Spinner size="sm" /> : "Register"}
				</Button>
			</Form>
		</Container>
	);
};

export default Form6;
