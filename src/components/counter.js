import React, { Component } from "react";

class counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    // this.setState(
    //     {
    //     count: this.state.count + 1
    //     },
    //     () => {
    //         console.log(this.state.count)
    //     }
    // )
    this.setState(
      (prevState) => ({
        count: prevState.count + 1,
      }),
      () => {
        console.log(this.state.count);
      }
    );
  }

  increseFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <div>count - {this.state.count}</div>
        <button onClick={() => this.increseFive()}>Increment</button>
      </div>
    );
  }
}

export default counter;
