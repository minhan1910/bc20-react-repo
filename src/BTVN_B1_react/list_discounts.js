import React, { Component } from "react";
import Discount from "./discount";
export default class ListDiscounts extends Component {
  render() {
    return (
      <section id="promotion" className="container-fluid pt-5 pb-5">
        <h1 className="text-center text-white">PROMOTION</h1>
        <div className="container bg-light pt-5 pb-5">
          <div className="row">
            <Discount />
            <Discount />
            <Discount />
          </div>
        </div>
      </section>
    );
  }
}
