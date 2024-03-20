import React from "react";
import { Button } from "react-bootstrap";

class ClassComp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			message: "Hello World",
			counter: 21,
		};
	}


    componentDidMount(){
        console.log("Burasi ilk render da calisir")
    }

    componentWillUnmount(){
        console.log("Burasi component hafizadan atilmadan hemen once calisir")
    }

    componentDidUpdate(prevProps, prevState){
        console.log("Burasi component her update edildiginde calisir. Sadece re-render da calisir  ")

        if(prevState.message !== this.state.message){
            console.log("Mesaj state i degistiginde calisir")
        }

        if(prevProps.firstName !== this.props.firstName){
            console.log("firstName prop degistiginde calisir")
        }
    }


	render() {
		return (
			<div>
				<h2>Class Type Component</h2>
				<h3>{this.state.message}</h3>
                <h4>Counter:{this.state.counter}</h4>
				<Button onClick={() => this.setState({ message: "Hello CTC" })}>
					Set message
				</Button>
			</div>
		);
	}
}

export default ClassComp;
