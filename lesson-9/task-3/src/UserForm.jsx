import React from 'react';

class UserForm extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    const formData = [...new FormData(this.formRef)].reduce((acc, [name, value]) => ({
      ...acc,
      [name]: value
    }), {});
    formData['name'] = 'name-89';
    formData['student'] = true;
    formData['occupation'] = 'new-york';
    formData['about'] = 'I am a student';
    this.props.onSubmit(formData);
  };

  setRef = node => {
    this.formRef = node;
  };

  render() {
    return (
      <form ref={this.setRef} className="login-form" onSubmit={this.handleSubmit}>
        <h1 className="form-title">Profile</h1>

        <div className="form-control">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-input" type="text" id="name" name="name" />
        </div>

        <div className="form-control">
          <label className="form-label" htmlFor="student">
            Student
          </label>
          <input className="form-input" type="checkbox" id="student" name="student" />
        </div>

        <div className="form-control">
          <label className="form-label" htmlFor="occupation">
            Occupation
          </label>
          <select name="occupation" className="form-input" id="occupation">
            <option value="london">London</option>
            <option value="new-york">New York</option>
            <option value="sidney">Sidney</option>
            <option value="berlin">Berlin</option>
          </select>
        </div>

        <div className="form-control">
          <label className="form-label" htmlFor="about">
            About
          </label>
          <textarea name="about" className="form-input" id="about" />
        </div>

        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default UserForm;

