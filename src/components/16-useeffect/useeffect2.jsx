import React, { useEffect } from "react";
import { FormControl } from "react-bootstrap";

const UseEffect2 = () => {
	useEffect(() => {
		console.log("MOUNTING: Useeffect2");

		return () => {
            // Bu bolumdeki kodlar, componnet hafizadan atilmadan hemen once calistirilir. Bu kisimda genellikle abonelikler iptal edilip, varsa acik baglantilar kapatilir ya da hafizada fazlaca yer tutacak degiskenler bosaltilir.
            console.log("UNMOUNTING: Useeffect2")
        };
	}, []);

	return (
		<div className="my-3">
			<FormControl placeholder="Type username" />
		</div>
	);
};

export default UseEffect2;
