import { 
  startTimer, 
  START_TIMER, 
  stopTimer, 
  STOP_TIMER 
} from './timerActions';

describe('Timer actions', () => {
  it('should create a start action', () => {
    const action = startTimer();
    expect(action).toEqual({ type: START_TIMER });
  });

  it('should create a stop action', () => {
    const action = stopTimer();
    expect(action).toEqual({ type: STOP_TIMER });
  });
});
