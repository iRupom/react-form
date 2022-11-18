import React from "react";

class ControlledForm extends React.Component {

    state = {
        name: '',
        email: '',
        password: ''
    }

	handleSubmit = (event) => {
		event.preventDefault();

		// let data = {};
		// data.name = event.target.name.value;
		// data.email = event.target.email.value;
		// data.password = event.target.password.value;
		// console.log(data);

        console.log(this.state);
        this.setState({
            name: '',
            email: '',
            password:''
        })

		event.target.reset();
    };
    
    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        let {name,email,password} = this.state;
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit}>
					<input
						className="form-control my-2"
						type="text"
						name="name"
						placeholder="Rakib Talukder Rupom"
                        value={name}
                        onChange={this.handleOnChange}
					/>
					<input
						className="form-control my-2"
						type="email"
						name="email"
						placeholder="rakib@gmail.com"
                        value={email}
                        onChange = {this.handleOnChange}
					/>
					<input
						className="form-control my-2"
						type="password"
						name="password"
                        placeholder="****"
                        value={password}
                        onChange = {this.handleOnChange}
					/>
					<button type="submit" className="btn btn-info px-4 py-2">
						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default ControlledForm;
