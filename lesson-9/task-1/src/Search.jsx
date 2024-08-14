import React from 'react';
import './search.scss'

class Search extends React.Component {
  state = {
    value: ''
  }

  valueChaange = event => {
    this.setState({ value: event.target.value })
  }

  search = e => {
    e.preventDefault();
    alert(`Search text: ${this.state.value}`);
  }
  render () {
    return (
      <form className="search" onSubmit={this.search}>
        <input type= "text" value={this.state.value} onChange={this.valueChaange}
          className="search__input"/>
        <button className="search__button" type="submit" >Search</button>
      </form>
    );
  }
}

export default Search;