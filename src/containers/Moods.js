import React from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { useDispatch, useSelector } from 'react-redux';
import { drinkCoffee, eatSnack, takeNap, toStudy } from '../actions/moodActions';

export const isTired = state => state.coffees < 1 && state.naps < 1;
export const isHyper = state => state.coffees > 3;
export const isEducated = state => state.studies > 2;
export const isHungry = state => state.snacks < 1;

export const getFace = state => {
  if(isTired(state) && isHungry(state)) return '🤬';
  if(isHyper(state) && isHungry(state)) return '🤮';
  if(isTired(state)) return '😴';
  if(isHyper(state)) return '🙀';
  if(isEducated(state)) return '🤯';
  if(isHungry(state)) return '😡';

  return '😀';
};

export const Moods = () => {
  const state = useSelector(state => state);
  const { coffees, snacks, naps, studies } = state;
  const dispatch = useDispatch();

  const handleSelection = action => {
    dispatch(action);
  };

  const face = getFace(state);

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
