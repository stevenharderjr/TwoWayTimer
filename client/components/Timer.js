import React from 'react';
import './timer.css';

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.handleCtrl = this.handleCtrl.bind(this);
    this.updateTime = this.updateTime.bind(this);
    this.pad = this.pad.bind(this);

    this.messages = {
      running: '(click timer to pause)',
      stopped: '(click timer to resume)'
    };

    this.state = {
      timerInstance: this.props._id,
      countDirection: 'down',
      running: false,
      h: 0,
      m: 0,
      s: 0
    }
  }

  handleCtrl(e) {
    e.preventDefault();
    const button = e.currentTarget.value;
    const { countDirection, timerInstance, running } = this.state;
    // console.log(timerInstance);

    if (timerInstance && button !== 'ctrl') {
      this.setState({ running: !running });
    } else {
      clearInterval(timerInstance);
      this.setState({
        running: true,
        countDirection: this.props.timer[countDirection].toggle,
        timerInstance: setInterval(this.updateTime, 1000)
      });
    }
  }

  updateTime() {
    if (this.state.running) {
      let { countDirection, h, m, s } = this.state;

      if (countDirection === 'up') {
        this.props.timer.up.timeAccumulated++;
        if (++s === 60) {
          s = 0;
          if (++m === 60) {
            m = 0;
            h++;
          }
        }
      } else {
        this.props.timer.down.timeAccumulated++;
        if (--s <= -60) {
          s = 0;
          if (--m <= -60) {
            m = 0;
            h--;
          }
        }
      }

      this.setState({ h, m, s });
    }
  }

  pad(number) {
    number = Math.abs(number);
    return number < 10 ? '0' + number : number;
  }

  render() {
    const { h, m, s, timerInstance, countDirection, running } = this.state;
    const { pad, handleCtrl } = this;
    const { timer } = this.props;
    let timerClass, timerAlt, buttonClass, buttonLabel;

    const init = timerInstance === this.props._id;

    if (running) {
      timerClass = "timer enlarge";
      timerAlt = "Pause timer";
      // buttonClass = "hide";
      buttonLabel = 'Switch to ' + timer[countDirection].toggleLabel;
    } else {
      timerClass = "timer shrink";
      timerAlt = "Resume timer";
      // buttonClass = "show";
      buttonLabel = init ? 'Start ' : 'Switch to ';
      buttonLabel += timer[countDirection].toggleLabel;
    }


    let time = (s < 0 || m < 0 || h < 0) ? '-' : ' ';
    time += `${pad(h)}:${pad(m)}:${pad(s)}`;

    return (
        <div id="timer-container">
          <h2>{ init ? 'Ready' : `${timer[countDirection].label}` } (click timer to {running ? 'pause' : init ? 'start' : 'resume'})</h2>
          <div className={ timerClass } onClick={handleCtrl}>
            <span title={timerInstance ? timerAlt : null }>{time}</span>
          </div>
          <button className={buttonClass} value='ctrl' title={buttonLabel} onClick={handleCtrl}>{buttonLabel}</button>
        </div>
      );
  }
}

export default Timer;
