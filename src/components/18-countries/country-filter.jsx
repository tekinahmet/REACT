import React, { useEffect, useState } from "react";
import { Container, FormControl, Table } from "react-bootstrap";
import data from "./countries.json";

const CountryFilter = () => {
	const [searchText, setSearchText] = useState("");
	const [countries, setCountries] = useState(data);

	useEffect(() => {
		const arr = data.filter((item) =>
			item.name
				.toLocaleLowerCase()
				.includes(searchText.toLocaleLowerCase())
		);
		setCountries(arr);
	}, [searchText]);

	return (
		<Container className="mt-4">
			<FormControl
				className="mb-3"
				type="search"
				placeholder="Type something..."
				onChange={(e) => setSearchText(e.target.value)}
			/>

			<Table striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						<th>Country Name</th>
						<th>Country Code</th>
					</tr>
				</thead>
				<tbody>
					{countries.map((item, index) => (
						<tr key={item.code}>
							<td>{index + 1}</td>
							<td>{item.name}</td>
							<td>{item.code}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</Container>
	);
};

export default CountryFilter;
