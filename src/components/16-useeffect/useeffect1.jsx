import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import UseEffect2 from "./useeffect2";

const UseEffect1 = () => {
	const [message, setMessage] = useState("Hello");
	const [error, setError] = useState("");
	const [showForm, setShowForm] = useState(false);

	// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	// !!!!!! USEEFFECT ASENKRON CALISIR !!!!!!!!!!!!!!!!!
	// !!! HER ZAMAN JSX RENDER OLDUKTAN SONRA CALISIR !!!
	// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

	useEffect(() => {
		console.log("MOUNTING: Bu kodlar sadece render da calisir.");
	}, []);

	useEffect(() => {
		console.log(
			"UPDATING: Bu kodlar render ve re-render durumlarinda calisir."
		);
	});

	useEffect(() => {
		console.log(
			"UPDATING-DA: Bu kodlar dependency array icindeki degerlerin degismesi durumunda calsir."
		);
	}, [error]);

	console.log(message);

	return (
		<div className="text-center mt-5">
			<Button onClick={() => setMessage(Math.random())}>
				Set Message
			</Button>
			<Button onClick={() => setError(Math.random())}>Set Error</Button>
			<Button onClick={() => setShowForm((prev) => !prev)}>
				Set Toggle Form
			</Button>

			{showForm ? <UseEffect2 /> : null}
		</div>
	);
};

export default UseEffect1;
