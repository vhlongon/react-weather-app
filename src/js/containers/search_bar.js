import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    //set initial value for the input
    this.state = { term: ''};
  }

  onInputChange = (e) => {
    this.setState({term: e.target.value});
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    //the action creator is bound to the component so we can call it via props
    // passing the value typed on the searchbar
    this.props.fetchWeather(this.state.term);

    //Clean the input value once the user has submited the data
    this.setState({term: ''});
  }

  render() {
    return (
      <form className="search-bar" onSubmit={this.onFormSubmit}>
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

// bind the Action to redux
function MapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// and connect the container component to the action on redux
// we are passing null because this component doesnt care about state beeing returned from redux
export default connect(null, MapDispatchToProps)(SearchBar);
