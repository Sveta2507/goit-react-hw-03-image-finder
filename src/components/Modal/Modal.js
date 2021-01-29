import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./Modal.module.css";

export default class Modal extends Component {
  static propTypes = {
    modal: PropTypes.func,
    largeImageURL: PropTypes.string.isRequired,
  };

  componentDidMount = () => {
    window.addEventListener("keydown", this.modal);
    window.addEventListener("click", this.modal);
  };

  componentWillUnmount = () => {
    window.removeEventListener("keydown", this.modal);
    window.removeEventListener("click", this.modal);
  };

  modal = (elem) => {
    if (elem.code === "Escape" || elem.target.nodeName !== "IMG") {
      this.props.modalClose();
    }
  };

  render() {
    return (
      <div className={classes.Overlay}>
        <div className={classes.Modal}>
          <img src={this.props.largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}
