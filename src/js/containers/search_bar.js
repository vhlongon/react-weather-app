import React, {Component} from 'react';

export default class SearchBar extends Component {

  constructor(props) {
    super(props);

    //set initial value for the input
    this.state = { term: ''};
  }

  onInputChange = (event) => {
    this.setState({term: event.target.value});
  }

  render() {
    return (
      <form>
        <input type="text"
          placeholder="Get a five-day forecast in your favourite cities"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
