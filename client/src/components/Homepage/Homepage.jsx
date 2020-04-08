import React from "react";
import Header from "../Header/Header";
// import axios from 'axios'

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: "",
    };
  }

  render() {
    return (
      <div>
        <Header />
        hello
      </div>
    );
  }
}

export default Homepage;
