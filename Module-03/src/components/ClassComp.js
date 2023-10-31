import { Component } from "react";

class ClassComp extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.times = setInterval(() => {
      console.log("Class component!");
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.times);
  }
  render() {
    return <h1>fantastic</h1>;
  }
}

export default ClassComp;
