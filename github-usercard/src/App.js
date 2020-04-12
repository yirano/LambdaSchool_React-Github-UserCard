import React, { Component } from "react";
import axios from "axios";
import UserCard from "./Components/UserCard";
import Form from "./Components/Form";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      user: "yirano",
      input: "",
    };
  }

  getData = async () => {
    return axios
      .get(`https://api.github.com/users/${this.state.user}`)
      .then((res) => {
        const data = res.data;
        return this.setState({ data: data });
      })
      .catch((err) => console.log(err));
  }
  componentDidMount() {
    return this.getData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.user !== this.state.user) {
      return this.getData();
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({user: this.state.input})
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          value={this.state.input}
        />
        <UserCard user={data} />
      </div>
    );
  }
}

export default App;
