import React, { Component } from "react";
import Item from "./item";

export default class ListItems extends Component {
  render() {
    return (
      <section id="smartphone" className="container-fluid pt-5 pb-5">
        <h1 className="text-white text-center">BEST SMARTPHONE</h1>
        <div className="row">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </section>
    );
  }
}
