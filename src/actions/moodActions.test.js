import { drinkCoffee, DRINK_COFFEE, eatSnack, EAT_SNACK, takeNap, TAKE_NAP, toStudy, STUDY } from './moodActions';

describe('Mood Actions', () => {
  it('should make a Drink Coffee action', () => {
    const action = drinkCoffee();
    expect(action).toEqual({
      type: DRINK_COFFEE
    }); 
  });

  it('should make a Eat Snack action', () => {
    const action = eatSnack();
    expect(action).toEqual({
      type: EAT_SNACK
    });
  });

  it('should make a Take Nap action', () => {
    const action = takeNap();
    expect(action).toEqual({
      type: TAKE_NAP
    });
  });


  it('should make a Study action', () => {
    const action = toStudy();
    expect(action).toEqual({
      type: STUDY
    });
  });
});
