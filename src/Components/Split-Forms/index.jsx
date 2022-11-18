import React from "react";
import Form from "./Form";
class SplitForm extends React.Component {
	state = {
		name: "",
		email: "",
		password: "",
	};

	handleSubmit = (event) => {
		event.preventDefault();

		// let data = {};
		// data.name = event.target.name.value;
		// data.email = event.target.email.value;
		// data.password = event.target.password.value;
		// console.log(data);

		console.log(this.state);
		this.setState({
			name: "",
			email: "",
			password: "",
		});

		// event.target.reset();
	};

	handleOnChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	render() {
		// let { name, email, password } = this.state;
        return <div className="container">
            <Form
                values={this.state}
                handleSubmit={this.handleSubmit}
                handleOnChange={this.handleOnChange}
            />
        </div>;
	}
}

export default SplitForm;
