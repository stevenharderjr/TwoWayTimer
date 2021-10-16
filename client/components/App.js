import React from 'react';
import axios from 'axios';
import Timer from './Timer';
import DisplayTimers from './DisplayTimers';
import TimerSelect from './TimerSelect';
import '../style.css';

const timers = [
  {
    _id: 0,
    up: {
      label: 'Typing Practice',
      toggleLabel: 'Video Games',
      toggle: 'down',
      ratio: 1,
      timeAccumulated: 0
    },
    down: {
      label: 'Video Games',
      toggleLabel: 'Typing Practice',
      toggle: 'up',
      ratio: 1,
      timeAccumulated: 0
    }
  },
  {
    _id: 1,
    up: {
      label: 'Sprint',
      toggleLabel: 'Rest',
      toggle: 'down',
      ratio: 1,
      timeAccumulated: 0
    },
    down: {
      label: 'Rest',
      toggleLabel: 'Sprint',
      toggle: 'up',
      ratio: 1,
      timeAccumulated: 0
    }
  },
  {
    _id: 2,
    up: {
      label: 'Speaking',
      toggleLabel: 'Listening',
      toggle: 'down',
      ratio: 1,
      timeAccumulated: 0
    },
    down: {
      label: 'Listening',
      toggleLabel: 'Speaking',
      toggle: 'up',
      ratio: 1,
      timeAccumulated: 0
    }
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  getTimers() {
    axios.get('/timers')
      .then(response => {
        this.setState()
      })
  }

  render() {
    return (
      <>
        <TimerSelect timers={timers} />
        <div id="timers">
          <DisplayTimers timers={timers} />
        </div>
        {/* <AddTimer /> */}
        {/* <HUD /> */}
      </>
    );
  }
};

export default App;
