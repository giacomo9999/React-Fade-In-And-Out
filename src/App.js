import React, { Component } from "react";

import "./App.css";
import DisplayComp from "./DisplayComp";

class App extends Component {
  state = {
    showList: false
  };

  toggle = () => {
    this.setState(prevState => ({
      showList: !prevState.showList
    }));
  };

  render() {
    return (
      <div className="container-outer">
        {this.state.showList ? (
          <div className="spacer5" />
        ) : (
          <button className="display" onClick={this.toggle}>
            Toggle Element
          </button>
        )}
        <DisplayComp toggle={this.toggle} showList={this.state.showList} />
      </div>
    );
  }
}

export default App;
