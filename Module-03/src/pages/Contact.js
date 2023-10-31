import { Component } from "react";
import User from "../components/User";
import FunctionComp from "../components/FunctionComp";

class Contact extends Component {
  constructor(props) {
    super(props);
    console.log("Contact Constructor");
  }
  componentDidMount() {
    // console.log("Contact Component");
  }
  render() {
    // console.log("Contact Render");

    return (
      <main style={{ textAlign: "center" }}>
        <h1>Hey Contact page</h1>
        <hr />
        <div style={{ display: "flex", justifyContent: "center" }}>
          {/* <User /> */}
        </div>
      </main>
    );
  }
}

export default Contact;
