import React, {Component} from 'react';
import {connect} from 'react-redux';

import Chart from '../components/chart';

class WeatherList extends Component {

  constructor(props) {
    super(props);
  }

  renderWeather = (cityData) => {
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
          <Chart data={temperature} w={width} h={height} color="orange" unit="K" />
        </td>
        <td>
            <Chart data={pressure} w={width} h={height} color="blue" unit="hPa" />
        </td>
        <td>
            <Chart data={humidity} w={width} h={height} color="green" unit="%" />
        </td>
      </tr>
    );
  }

  render = () => {
    return (
      <div className="weather-list">
        <table>
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature (K)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.renderWeather)}
          </tbody>
        </table>
      </div>
    );
  }
}

// This binds the redux 'weather' piece of state to the component so we can use props.weather
// Here we are using ES6 destructuring to directly get state.weather
function MapStateToProps({weather}) {
  return { weather };
}

// We could also have written like the below
// function MapStateToProps(state) {
//   return { weather: state.weather };
// }

export default connect(MapStateToProps)(WeatherList);
