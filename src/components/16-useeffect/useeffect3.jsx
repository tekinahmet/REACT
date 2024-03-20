import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";

const UseEffect3 = () => {
	const [counter, setCounter] = useState(0);


    useEffect( ()=>{
        document.title = `You clicked ${counter} times`;
    }, [counter])
   

	return (
		<Container id="panel">
			<h1>You clicked {counter} times</h1>

			<Button onClick={() => setCounter((prev) => prev + 1)}>
				Click me
			</Button>
		</Container>
	);
};

export default UseEffect3;
