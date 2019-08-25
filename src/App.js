import React, { Component } from "react";
import cx from "classnames";
import { CSSTransition } from "react-transition-group";
import "./App.css";


class App extends Component {
  state = {
    showList: true,
    highlightedHobby: false
  };

  switch = () => {
    this.setState(prevState => ({
      showList: !prevState.showList
    }));
  };

  listSwitch = () => {
    this.setState(state => ({
      highlightedHobby: !state.highlightedHobby
    }));
  };

  render() {
    return (
      <div className="container-outer">
        <button className="display" onClick={this.switch}>
          Show List
        </button>
        <CSSTransition
          in={this.state.showList}
          timeout={400}
          classNames="list-transition"
          unmountOnExit
          appear
          onEntered={this.listSwitch}
          onExit={this.listSwitch}
        >
          <div className="container-inner">
            <h3>I Appear and Disappear</h3>
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default App;
