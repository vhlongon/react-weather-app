import React  from 'react';
import {Sparklines, SparklinesLine} from 'react-sparklines';

export default (props) => {
  return (
    <div>
      <Sparklines height={props.h} width={props.w} data={props.data}>
        <SparklinesLine color={props.color} />
      </Sparklines>
    </div>
  );
}
