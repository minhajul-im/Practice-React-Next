import { Component } from "react";
import ClassComp from "../components/ClassComp";

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main>
        <h1>Hey About page</h1>
        <ClassComp />
      </main>
    );
  }
}

export default About;
