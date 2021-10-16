import React from 'react';

const TimerSelect = props => {
  let key = 0;
  return (
    <select id="timer-select">
      {props.timers.map(timer => (
        <option key={key++}>{timer.up.label} / {timer.down.label}</option>
      ))}
    </select>
  );
};

export default TimerSelect;