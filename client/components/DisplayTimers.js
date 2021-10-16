import React from 'react';
import Timer from './Timer';

const DisplayTimers = ({ timers }) => {
  let key = 0;
  return (
    <>
      { timers.map(timer => <Timer key={timer._id} timer={timer} />) }
    </>
  );
};

export default DisplayTimers;
