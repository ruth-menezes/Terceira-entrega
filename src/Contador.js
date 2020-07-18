import React from "react";

export default class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      count: 0,
    };
  }

  render() {
    return (
      <div className="counter">
        <div className="result">{this.state.count}</div>
      </div>
    );
  }
}
