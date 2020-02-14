import { startTimer, stopTimer } from '../actions/timerActions';
import reducer from './timerReducer';

describe('Timer Reducer', () => {
  it('should start time with start action', () => {
    const action = startTimer();
    const state = { timer: false };

    const newState = reducer(state, action);

    expect(newState).toEqual({ timer: true });
  });

  it('should stop timer with stop action', () => {
    const action = stopTimer();
    const state = { timer: true };

    const newState = reducer(state, action);

    expect(newState).toEqual({ timer: false });
  });
});
