import moodReducer from './moodReducer';
import { drinkCoffee, eatSnack, takeNap, toStudy, makeReset } from '../actions/moodActions'; 
import reducer from './moodReducer';

describe('Mood Reducer', () => {
  it('should set coffees with a coffee action', () => {
    const action = drinkCoffee();
    const state = { coffees: 0 };

    const newState = moodReducer(state, action);

    expect(newState).toEqual({ coffees: 1 });
  });

  it('should set snacks with snacks action', () => {
    const action = eatSnack();
    const state = { snacks: 0 };

    const newState = reducer(state, action);

    expect(newState).toEqual({ snacks: 1 });
  });

  it('should set naps with nap action', () => {
    const action = takeNap();
    const state = { naps: 0 };

    const newState = reducer(state, action);

    expect(newState).toEqual({ naps: 1 });
  });

  it('should set studies with study action', () => {
    const action = toStudy();
    const state = { studies: 0 };

    const newState = reducer(state, action);

    expect(newState).toEqual({ studies: 1 });
  });

  it('should return state with an unknown action', () => {
    const action = { type: 'NEVER_EAT_AGAIN' };
    const state = { coffees: 1, naps: 0, studies: 8 };

    const newState = reducer(state, action);

    expect(newState).toEqual(state);
  });

  it('should reset state with Reset action', () => {
    const action = makeReset();
    const state = { coffees: 1, naps: 0, studies: 8 };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 0
    });
  });
});
