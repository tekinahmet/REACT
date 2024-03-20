import React, { useState } from "react";
import { Button } from "react-bootstrap";

const State = () => {
	const [classes, setClasses] = useState("bg-dark text-light");

    const mesaj = "Hello"

	console.log("Fonksiyon disi");

	return (
		<div id="panel" style={{ height: "100vh" }} className={classes}>
			<h1>Dark/Light Switcher</h1>

			<div className="d-flex gap-4 mt-5">
				<Button onClick={() => setClasses("bg-dark text-light")}>
					Dark Mode
				</Button>
				<Button onClick={() => setClasses("bg-light text-dark")}>
					Light Mode
				</Button>
			</div>
		</div>
	);
};

export default State;
