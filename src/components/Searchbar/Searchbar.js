import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./Searchbar.module.css";

export default class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    cond: "",
  };

  handleSubmit = (elem) => {
    elem.preventDefault();
    this.props.onSubmit(this.state.cond);
  };

  handleChange = (elem) => {
    this.setState({ cond: elem.target.value });
  };

  render() {
    const { cond } = this.state;
    return (
      <div>
        <header className={classes.Searchbar}>
          <form className={classes.SearchForm} onSubmit={this.handleSubmit}>
            <button type="submit" className={classes.SearchFormButton}>
              <span className={classes.SearchFormButtonLabel}>Search</span>
            </button>

            <input
              name="cond"
              value={cond}
              className={classes.SearchFormInput}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleChange}
            />
          </form>
        </header>
      </div>
    );
  }
}
