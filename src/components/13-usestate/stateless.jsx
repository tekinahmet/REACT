import React from "react";
import { Button } from "react-bootstrap";

const Stateless = () => {
	let classes = "bg-dark text-light";


    const setClasses = (mode) => { 
        console.log(mode)
        if(mode === "dark"){
            classes = "bg-dark text-light"
        }
        else{
            classes = "bg-light text-dark"
        }
        console.log(classes)

     }


     console.log("Fonksiyon disi")

     // Bu yapida classes degiskeninin degeri degisse bile JSX icindeki div in className degerine etki etmez. Cunku JSX kismi, classes degiskeni degistiginde tekrar yenilenmelidir

	return (
		<div id="panel" style={{ height: "100vh" }} className={classes}>
			<h1>Dark/Light Switcher</h1>

			<div className="d-flex gap-4 mt-5">
				<Button onClick={()=>setClasses("dark")}>Dark Mode</Button>
				<Button onClick={()=>setClasses("light")}>Light Mode</Button>
			</div>
		</div>
	);
};

export default Stateless;
