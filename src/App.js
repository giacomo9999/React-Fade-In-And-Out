import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import "./App.css";

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
        <CSSTransition
          in={this.state.showList}
          timeout={400}
          classNames="fade"
          unmountOnExit
          appear
          onEntered={this.switch}
          onExit={this.switch}
        >
          <div className="container-inner">
            <h1>I Appear and Disappear</h1>
            <div className="spacer10" />
            <button className="display" onClick={this.toggle}>
              Toggle Element
            </button>
            <div className="spacer10" />
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default App;
