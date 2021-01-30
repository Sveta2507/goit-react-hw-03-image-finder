import React, { Component } from "react";
import "./App.css";

import Modal from "./components/Modal/Modal";
import Load from "./components/Load/Load";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";

import imageApi from "./services/imageApi";
// console.log(imageApi);

class App extends Component {
  state = {
    data: [],
    loading: false,
    error: null,
    query: "",
    page: 1,
    largeImageURL: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;
    if (prevQuery !== nextQuery) {
      this.fetchData();
    }
  }

  hendleSearch = (queryOn) => {
    this.setState({
      data: [],
      page: 1,
    });
    this.setState({
      query: queryOn,
    });
  };

  openModal = (largeImageURL) => {
    this.setState({
      largeImageURL: largeImageURL,
    });
  };

  modalClose = () => {
    this.setState((prevState) => ({ largeImageURL: !prevState.largeImageURL }));
  };

  fetchData = () => {
    this.setState({ loading: true });
    const { query, page, APIkey } = this.state;
    imageApi(query, page, APIkey)
      .then((data) => {
        if (data.length < 1) {
          this.setState({ error: true });
        } else {
          this.setState((prevState) => ({
            data: [...prevState.data, ...data],
            page: prevState.page + 1,
            error: false,
          }));
          const { scrollTop, clientHeight } = document.documentElement;
          if (page > 1) {
            window.scrollTo({
              top: scrollTop + clientHeight - 160,
              behavior: "smooth",
            });
          }
        }
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  render() {
    const { data, loading, error, largeImageURL } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.hendleSearch} />
        {error && <p>Error</p>}

        {loading && <Load />}
        <ImageGallery data={data} openModal={this.openModal} />
        {data.length > 0 && <Button handleClick={this.fetchData} />}
        {largeImageURL && (
          <Modal
            onSubmit={this.openModal}
            largeImageURL={largeImageURL}
            modalClose={this.modalClose}
          />
        )}
      </div>
    );
  }
}

export default App;
