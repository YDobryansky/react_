/* <main class="page">
  <form class="login-form">
    <h1 class="form-title">Profile</h1>
    <div class="form-control">
      <label class="form-label" for="name">
        Name
      </label>
      <input class="form-input" type="text" id="name" name="name" value="anonymous" />
    </div>
    <div class="form-control">
      <label class="form-label" id="age" for="age">
        Age
      </label>
      <input class="form-input" type="number" value="17" name="age" />
      <span style="color: red; font-weight: 700">To young</span>
    </div>
    <button class="submit-button" type="submit">
      Submit
    </button>
  </form>
</main>; */

import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const rootElement = document.querySelector('#root');
const style = { color: 'red', fontWeight: 700 };

const element = (
  <main className="page">
    <form className="login-form">
      <h1 className="form-title">Profile</h1>
      <div className="form-control">
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input className="form-input" type="text" id="name" name="name" value="anonymous" />
      </div>
      <div className="form-control">
        <label className="form-label" id="age" htmlFor="age">
          Age
        </label>
        <input className="form-input" type="number" value="17" name="age" />
        <span style={style}>To young</span>
      </div>
      <button className="submit-button" type="submit">
        Submit
      </button>
    </form>
  </main>
);

ReactDOM.render(element, rootElement);
