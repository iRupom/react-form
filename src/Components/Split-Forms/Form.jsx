import React from 'react'
import PropTypes from 'prop-types'
import TextInput from './TextInput';

const Form = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<TextInput
				name="name"
				placeholder="Rakib Talukder Rupom"
				label="Enter Name"
				value={props.values.name}
				onChange={props.handleOnChange}
			/>
			<TextInput
				name="email"
				type="email"
				placeholder="rakib@gmail.com"
				label="Enter Your Email"
				value={props.values.email}
				onChange={props.handleOnChange}
			/>
			<TextInput
				label="Enter Password"
				placeholder="****"
				type="password"
				name="password"
				value={props.values.password}
				onChange={props.handleOnChange}
			/>
			<button type="submit" className="btn btn-info px-4 py-2">
				Submit
			</button>
		</form>
	);
};

Form.propTypes = {
	value: PropTypes.object.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	handleOnChange: PropTypes.func.isRequired,
};

export default Form
