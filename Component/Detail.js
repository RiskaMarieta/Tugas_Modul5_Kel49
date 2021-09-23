import { Component } from "react";
import React from "react";
import Index from "./index";

class Detail extends Component {
  state = {
    Component1: false,
  };
  ubahComponent1 = () => {
    this.setState((state) => {
      return { Component1: !this.state.Component1 };
    });
  };

  render() {
    return (
      <div>
        {this.state.Component1 ? <Index /> : ""}
        <button className="button bg-danger" onClick={this.ubahcomponent1}>
          {this.state.Component1 ? "Sembunyikan" : "Tampilkan"} Database Player
        </button>
      </div>
    );
  }
}
export default Detail;
