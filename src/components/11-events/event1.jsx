import React from "react";
import { Button, Container } from "react-bootstrap";

const Event1 = () => {
	const sayHello = () => {
		alert("Hello");
	};


    // Event listenar lara, handler atamasi yapilirken 
    // onClick={sayHello}
    // () parantezler kullanilmaz. Kullanilirsa bunu fonksiyon cagrisi olarak algilayip hemen calistirir

	return (
		<Container className="mt-3">
			<Button onClick={sayHello}>Say Hello</Button>
		</Container>
	);
};

export default Event1;
