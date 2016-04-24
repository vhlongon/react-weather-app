import React, {Component} from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component {

  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
      </table>
    );
  }
}

// This:
function MapStateToProps({weather}) {
  return { weather };
}

// is the same as this, but using ES6 using destructuring
// function MapStateToProps(state) {
//   return { weather: state.weather };
// }

export default connect(MapStateToProps)(WeatherList);
