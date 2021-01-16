import React, { Component } from "react";
import "./App.css";

import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";

import imageApi from "./services/imageApi";
// console.log(imageApi);

class App extends Component {
  state = {
    q: "",
    page: 1,
    images: [],
  };

  getQ = (query) => {
    this.setState({ q: query });
  };

  fetchImages = () => {
    const { q, page } = this.state;

    imageApi
      .getFetch(q, page)
      .then((data) => {
        console.log(data);
        if (data.length > 0) {
          this.setState((prev) => ({
            images: [...prev.images, ...data],
            page: prev.page + 1,
          }));
        }
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.q !== this.state.q) {
      this.fetchImages();
    }
  }

  componentWillUnmount() {}

  render() {
    return (
      <>
        <Searchbar getQ={this.getQ} />
        <ImageGallery props={this.state.images} />
      </>
    );
  }
}

export default App;
