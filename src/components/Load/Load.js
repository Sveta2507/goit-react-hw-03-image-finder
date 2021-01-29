import React, { Component } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
//find react-loader-spinner in node-modals previously installing the package by command ' npm install react-loader-spinner --save '

export default class Loaders extends Component {
  render() {
    return (
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
      />
    );
  }
}
