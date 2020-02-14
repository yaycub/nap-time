import { START_TIMER, STOP_TIMER } from '../actions/timerActions';

export default function reducer(state = { timer: false }, action) {
  switch(action.type){
    case START_TIMER:
      return { ...state, timer: true };
    case STOP_TIMER:
      return { ...state, timer: false };
  }
}
