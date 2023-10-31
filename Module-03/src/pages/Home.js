import React from "react";
import OnlineStatus from "../components/OnlineStatus";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      names: "minhajul",
      btnName: "Login",
    };
  }
  componentDidMount() {}
  render() {
    const { count } = this.state;

    return (
      <div style={{ textAlign: "center" }}>
        <OnlineStatus />
        <div>
          <h1>{count}</h1>
          <button
            onClick={() => {
              this.setState({
                count: count + 1,
              });
            }}
          >
            count increase
          </button>
        </div>
      </div>
    );
  }
}
export default Home;

/**
 * home Constructor
 * home render

 * * first Constructor
 * * first Render
 * *  * ONE Constructor
 * *  * ONE Render

 * * second Constructor
 * * second Render

 * * * TWO Constructor
 * * * TWO Render

 * * third  Constructor
 * * third  Render
 * * * THREE Constructor
 * * * THREE Render

 * * * ONE Component Did Mount
 * * * TWO Component Did Mount
 * * * THREE Component Did Mount

 * * first Component Did Mount
 * * second Component Did Mount
 * * third Component Did Mount

 * home Component Did Mount
 */
