import { 
  drinkCoffee, 
  eatSnack, 
  takeNap, 
  toStudy 
} from '../actions/moodActions';
import React, { useState } from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { useDispatch, useSelector } from 'react-redux';
import { getFace } from '../selectors/faceSelector';
import { useGame } from '../hooks/game';

export const Moods = () => {
  const { setTimer, counter, timer } = useGame();
  const { coffees, snacks, naps, studies } = useSelector(state => state);
  const face = useSelector(getFace);
  const dispatch = useDispatch();
  
  const handleSelection = action => {
    dispatch(action);
  };

  return !timer ? (<button onClick={() => setTimer(true)}>START</button>) : (
    <>
      <Controls>
        <button onClick={() => handleSelection(drinkCoffee())}>coffee - {coffees}</button>
        <button onClick={() => handleSelection(eatSnack())}>snacks - {snacks}</button>
        <button onClick={() => handleSelection(takeNap())}>naps - {naps}</button>
        <button onClick={() => handleSelection(toStudy())}>studies - {studies}</button>
      </Controls>
      <Face emoji={face} />
      <p>Time Left: {counter}</p>
    </>
  );
};
