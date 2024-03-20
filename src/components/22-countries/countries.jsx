import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Image, Table } from "react-bootstrap";

const API_URL = "https://restcountries.com/v3.1/all";

const Countries = () => {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		const loadData = async () => {
			const res = await axios(API_URL);
			setCountries(res.data);
			console.log(res.data);
		};

		loadData();
	}, []);

	return (
		<Container className="mt-4">
			<Table>
				<thead>
					<tr>
						<th>#</th>
						<th>Flag</th>
						<th>Name</th>
						<th>Population</th>
						<th>Capital City</th>
						<th>Currencies</th>
					</tr>
				</thead>
				<tbody>
					{countries.map((item, index) => (
						<tr key={item.cca2}>
							<td>{index + 1}</td>
							<td>
								<a href={item.maps.googleMaps} target="_blank">
									<Image
										src={item.flags.svg}
										alt={item.flags.alt}
										fluid
									/>
								</a>
							</td>
							<td>{item.name.official}</td>
							<td>{item.population}</td>
							<td>{item.capital?.join("-")}</td>
							<td>
								{Object.values(item.currencies ?? {}).map(
									(item) => item.name
								).join("-")}
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</Container>
	);
};

export default Countries;
