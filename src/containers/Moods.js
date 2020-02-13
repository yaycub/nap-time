import { 
  drinkCoffee, 
  eatSnack, 
  takeNap, 
  toStudy 
} from '../actions/moodActions';
import React from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { useDispatch, useSelector } from 'react-redux';
import { getFace } from '../selectors/faceSelector';

export const Moods = () => {
  const state = useSelector(state => state);
  const { coffees, snacks, naps, studies } = state;
  const dispatch = useDispatch();
  const face = useSelector(getFace);

  const handleSelection = action => {
    dispatch(action);
  };

  return (
    <>
      <Controls>
        <button onClick={() => handleSelection(drinkCoffee())}>coffee - {coffees}</button>
        <button onClick={() => handleSelection(eatSnack())}>snacks - {snacks}</button>
        <button onClick={() => handleSelection(takeNap())}>naps - {naps}</button>
        <button onClick={() => handleSelection(toStudy())}>studies - {studies}</button>
      </Controls>
      <Face emoji={face} />
    </>
  );
};
