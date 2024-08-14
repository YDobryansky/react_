import React from 'react';

class UserForm extends React.Component {
    state = {
        name: '',
        student: false,
        occupation: '',
        about: ''
    }

    handleChange = event => {
        const { name, value, checked, type } = event.target;

        const val = type === 'checkbox'
            ? checked
            : value;

        this.setState({
            [name]: val
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }

    render () {
        return (
            <form className='login-form' onSubmit={this.handleSubmit} >
                <h1 className='form-title'>Profile</h1>
                <div className='form-control'>
                    <label className='form-label' htmlFor='name'>Name</label>
                    <input className='form-input' type='text' id='name' name='name' value={this.state.name} onChange={this.handleChange} />
                </div>
                <div className='form-control'>
                    <label className='form-label' htmlFor='student'>Student</label>
                    <input className='form-input' type='checkbox' id='student' name='student' checked={this.state.student} onChange={this.handleChange} />
                </div>
                <div className='form-control'>
                    <label className='form-label' htmlFor='occupation'>Occupation</label>
                    <select name='occupation' className='form-input' id='occupation' value={this.state.occupation} onChange={this.handleChange} >
                        <option value=''>Select...</option>
                        <option value='london'>London</option>
                        <option value='new-york'>New York</option>
                        <option value='sidney'>Sidney</option>
                        <option value='berlin'>Berlin</option>
                    </select>
                </div>
                <div className='form-control'>
                    <label className='form-label' htmlFor='about'>About</label>
                    <textarea name='about' className='form-input' id='about' value={this.state.about} onChange={this.handleChange} />
                </div>
                <button className='submit-button' type='submit'>Submit</button>
            </form>
        );
    }
}

export default UserForm;
