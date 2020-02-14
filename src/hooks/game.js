import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { makeReset } from '../actions/moodActions';

export const useGame = () => {
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(false);
  const [counter, setCounter] = useState(5);
  const [gameOver, setGameOver] = useState(false);
  const [stopWatch, setStopWatch] = useState();

  const time = () => {
    setCounter(count => count - 1);
  };

  useEffect(() => {
    clearInterval(stopWatch);
    if(!timer) return;
    setStopWatch(setInterval(() => time(), 1000));
  }, [timer]);

  useEffect(() => {
    if(counter === 0) {
      setCounter(5);
      setTimer(false);
      setGameOver(true);
      dispatch(makeReset());
    }
  }, [counter]);

  const handleClick = () => {
    setTimer(true);
  };

  return { timer, handleClick, counter, gameOver };
};
