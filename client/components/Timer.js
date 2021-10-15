import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.handleCtrl = this.handleCtrl.bind(this);
    this.updateTime = this.updateTime.bind(this);

    this.ctrl = {
      up: {
        msg: 'Roll Back',
        inc: 1,
        toggle: 'down'
      },
      down: {
        msg: 'Run Timer',
        inc: -1,
        toggle: 'up'
      }
    };

    this.state = {
      timer: undefined,
      dir: 'down',
      h: 0,
      m: 0,
      s: 0
    }
  }

  handleCtrl(e) {
    e.preventDefault();
    const { dir, timer } = this.state;
    clearInterval(timer);
    this.setState({
      dir: this.ctrl[dir].toggle,
      timer: setInterval(this.updateTime, 1000)
    });
  }

  updateTime() {
    let { dir, h, m, s } = this.state;
    const inc = this.ctrl[dir].inc;

    s += inc;

    if (s === 60) {
      s = 0;
      m += inc;
      if (m === 60) {
        m = 0;
        h += inc;
      }
    }

    this.setState({ h, m, s });
  }

  render() {
    const { h, m, s, dir } = this.state;
    const { ctrl, handleCtrl } = this;

    return (
        <>
          <span>{h}:</span>
          <span>{m}:</span>
          <span>{s}</span>
          <br></br>
          <button className='count-control' title={ctrl[dir].msg} onClick={handleCtrl}>{ctrl[dir].msg}</button>
        </>
      );
  }
}

export default Timer;
