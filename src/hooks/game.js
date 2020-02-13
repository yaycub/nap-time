import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const useGame = () => {
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(false);
  const [counter, setCounter] = useState(30);

  const time = () => {
    setCounter(count => count - 1);
  };

  let stopWatch;
  useEffect(() => {
    if(!timer) return;
    clearInterval(stopWatch);
    stopWatch = setInterval(() => time(), 1000);
  }, [timer]);

  useEffect(() => {
    if(counter === 0) setTimer(false);
  }, [counter]);
  return { timer, setTimer, counter };
};
