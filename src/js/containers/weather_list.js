import React, {Component} from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component {

  constructor(props) {
    super(props);
  }

  renderWeather = (cityData) => {
    console.log(cityData);
    return(
      <tr key={cityData.city.id}>
        <td>{cityData.name}</td>
      </tr>
    )
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
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
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
