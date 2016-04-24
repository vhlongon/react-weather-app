import React, {Component} from 'react';
import {connect} from 'react-redux';

import Chart from '../components/chart';

class WeatherList extends Component {

  constructor(props) {
    super(props);
  }

  renderWeather = (cityData) => {
    // console.log(cityData);
    let id = cityData.city.id;
    let name = cityData.city.name;
    let temperature = cityData.list.map(weather => weather.main.temp);
    let pressure = cityData.list.map(weather => weather.main.pressure);
    let humidity = cityData.list.map(weather => weather.main.humidity);
    let width = 200;
    let height = 180;
    return (
      <tr key={id}>
        <td>{name}</td>
        <td>
          <Chart data={temperature} w={width} h={height} color="orange" />
        </td>
        <td>
            <Chart data={pressure} w={width} h={height} color="blue" />
        </td>
        <td>
            <Chart data={humidity} w={width} h={height} color="green" />
        </td>
      </tr>
    );
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
