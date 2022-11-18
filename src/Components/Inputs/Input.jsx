import React from 'react';

class Input extends React.Component { 
    state = {
        name: '',
        country: '',
        bio: '',
        birthDay: '',
        gender: '',
        agree: true,
        skills: []
    }

    handleChange = event => {
        this.setState({
            // this array will dynamically find the attribute vale to change.
            [event.target.name]:event.target.value
        })
    }

    handleClick = event => {
        console.log(this.state);
    }

    handleChecked = event => {
        this.setState({
            agree: event.target.checked
        })
    }

    onChangeSkill = event => {
        // first if the event field is checked then add the item in the skills array set

        if (event.target.checked) {
            this.setState({
                skills: [...this.state.skills, event.target.value]
            })
        }

        else {
            // remove the item from the skills array
            // filter out the skills that is not matched with the current item

            let skills = this.state.skills.filter(item => item !== event.target.value);

            this.setState({
                skills: skills
            })
        }
    }

    render() {
        let {name,country,bio,birthDay,agree,skills} = this.state;
        return (
			<div className="container">
				<input
					className="form-control my-3 p-3"
					type="text"
					name="name"
					placeholder="Rakib Talukder Rupom"
					onChange={this.handleChange}
					value={name}
				/>
				<select
					className="form-control my-3 p-3"
					name="country"
					onChange={this.handleChange}
					value={country}
				>
					<option>Select Country</option>
					<option value="Bangladesh">Bangladesh</option>
					<option value="India">India</option>
					<option value="SriLanka">Srilanka</option>
					<option value="Pakistan">Pakistan</option>
					<option value="China">China</option>
				</select>
				<textarea
					className="form-control my-3 p-3"
					name="bio"
					placeholder="Tell Me About Yourself"
					onChange={this.handleChange}
					value={bio}
				></textarea>
				<input
					className="form-control"
					type="date"
					name="birthDay"
					onChange={this.handleChange}
					value={birthDay}
				/>
				<div>
					Gender :
					<br />
					<input
						type="radio"
						name="gender"
						value="Male"
						onChange={this.handleChange}
					/>
					Male
					<input
						type="radio"
						name="gender"
						value="Female"
						onChange={this.handleChange}
					/>
					Female
					<input
						type="radio"
						name="gender"
						value="Others"
						onChange={this.handleChange}
					/>
					Others
				</div>
				<div>
					Skills :
					<br />
					<input
						type="checkbox"
						name="skills"
						value="Java"
						checked={skills.includes("Java")}
						onChange={this.onChangeSkill}
					/>
					Java
					<input
						type="checkbox"
						name="skills"
						value="JavaScript"
						checked={skills.includes("JavaScript")}
						onChange={this.onChangeSkill}
					/>
					JavaScript
					<input
						type="checkbox"
						name="skills"
						value="Python"
						checked={skills.includes("Python")}
						onChange={this.onChangeSkill}
					/>
					Python
					<input
						type="checkbox"
						name="skills"
						value="GoLang"
                        checked={skills.includes("GoLang")}
                        // above checked field is changing our view.
						onChange={this.onChangeSkill}
					/>
					GoLang
				</div>
				<div>
					<input
						type="checkbox"
						name="agree"
						checked={agree}
						onChange={this.handleChecked}
					/>
					I agree to all the terms and conditions
				</div>
				<button
					className="btn btn-info my-3"
					onClick={this.handleClick}
				>
					Show Current State
				</button>
			</div>
		);
    }
}

export default Input;