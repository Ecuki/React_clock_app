import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  state = {
    active: true
  };
  handleClick = () => {
    this.setState(state => ({
      active: !state.active
    }));
  };
  render() {
    const clock = (
      <div>
        <SwitchButton active={this.state.active} click={this.handleClick} />
        {this.state.active && <Clock />}
      </div>
    );
    return clock;
  }
}
const SwitchButton = props => (
  <button className="myButton" onClick={props.click}>
    {props.active ? "Wyłącz" : "Włącz"}
  </button>
);

class Clock extends React.Component {
  interval = "";
  state = {
    time: this.getTime()
  };
  getTime() {
    const currentTime = new Date();
    return {
      h: currentTime.getHours(),
      m: currentTime.getMinutes(),
      s: currentTime.getSeconds()
    };
  }
  setTmie() {
    const time = this.getTime();
    this.setState({
      time
    });
  }
  componentDidMount() {
    this.interval = setInterval(() => this.setTmie(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    this.getTime();
    const { h, m, s } = this.state.time;
    return (
      <div>
        {h > 9 ? h : `0${h}`} : {m > 9 ? m : `0${m}`} : {s > 9 ? s : `0${s}`}
      </div>
    );
  }
}

export default App;
