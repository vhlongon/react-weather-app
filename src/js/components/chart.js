import _ from 'lodash';

import React  from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

function average(data) {
  // Using ES6 only:
  return Math.round(data.reduce((a, b) => a + b , 0) / data.length);

  // Using lodash utilities
  // return _.round(_.sum(data)/data.length);

}

export default (props) => {
  return (
    <div>
      <Sparklines height={props.h} width={props.w} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)} {props.unit}</div>
    </div>
  );
}
