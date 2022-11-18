import React from 'react';

class UncontrolledForm extends React.Component {
    
    handleSubmit = event => {
        event.preventDefault();

        let data = {};
        data.name = event.target.name.value;
        data.email = event.target.email.value;
        data.password = event.target.password.value;
        console.log(data);

        event.target.reset();
    }

    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name='name'
                        placeholder='Rakib Talukder Rupom' 
                        className='form-control my-2'
                    />
                    <input
                        type="email"
                        name='email'
                        placeholder='rakib@gmail.com'
                        className='form-control my-2'
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder='****'
                        className='form-control my-2'
                    />
                    <button
                        type="submit"
                        className='btn btn-info px-4 py-2'
                    >
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default UncontrolledForm;