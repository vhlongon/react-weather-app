import React, {Component} from 'react';
import {connect} from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

  constructor(props) {
    super(props);
  }

  renderWeather = (cityData) => {
    let id = cityData.city.id,
        name = cityData.city.name,
        temperature = cityData.list.map(weather => weather.main.temp),
        pressure = cityData.list.map(weather => weather.main.pressure),
        humidity = cityData.list.map(weather => weather.main.humidity),
        width = 200,
        height = 180,
        // use same ES6 destructuring to make the code more DRY
        {lat, lon} = cityData.city.coord;


    return (
      <tr key={id}>
        <td>
          <GoogleMap lat={lat} lon={lon} />
        </td>
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
