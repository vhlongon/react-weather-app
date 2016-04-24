import React, {Component} from 'react';

export default class WeatherList extends Component {

  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>City</th>
          </tr>
        </thead>
      </table>
    );
  }
}
