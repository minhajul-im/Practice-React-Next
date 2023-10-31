import { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    console.log("constructor User");
    this.state = {
      user: {},
    };
  }

  async componentDidMount() {
    const userData = await fetch("https://api.github.com/users/minhajul-im");
    const jsonData = await userData.json();

    this.setState({
      user: jsonData,
    });
  }

  render() {
    const { name, login, avatar_url, bio } = this.state.user;
    return (
      <section style={{ textAlign: "center" }}>
        <div style={{ border: "1px solid black", width: "350px" }}>
          <img
            style={{ width: "250px", height: "250px", borderRadius: "50%" }}
            src={avatar_url}
            alt="minhaj"
          />
          <h6>@{login}</h6>
          <h3>{name}</h3>
          <p>{bio}</p>
        </div>
      </section>
    );
  }
}

export default User;
