import {FETCH_WEATER} from '../actions/index';

export default function (state = [], action) {
  // console.log('Action received', action);
  switch(action.type) {
    case FETCH_WEATER:
      // since we should NOT mutate state directly inside a reducer in redux
      // we use concat instead of push (which mutates the state) for ES5:
      // state.concat([action.payload.data]);
      // or use ES6 spread operator like so:
      return [action.payload.data, ...state];
  }
  return state;
}
