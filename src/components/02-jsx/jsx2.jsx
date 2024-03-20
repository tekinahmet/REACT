import React from "react";

const Jsx2 = () => {
	const student = {
		name: "John",
		no: 547,
		city: "London",
	};

	// commment

	return (
		<div className="jsx2">
			{/* 
                Eger JSX icidne JS ifadesi kullanilacaksa suslu parantez icine yazilmalidir
            */}
			<table>
				<tbody>
					<tr>
						<td>Name</td>
						<td>{student.name}</td>
					</tr>
					<tr>
						<td>No</td>
						<td>{student.no}</td>
					</tr>
					<tr>
						<td>City</td>
						<td>{student.city}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Jsx2;
