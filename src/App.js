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
        // console.log(data);
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
        {error && <p>...The query value failed...</p>}

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

// class App extends Component {
//   state = {
//     q: "",
//     page: 1,
//     images: [],
//   };

//   getQ = (query) => {
//     this.setState({ q: query });
//   };

//   fetchImages = () => {
//     const { q, page } = this.state;

//     imageApi
//       .getFetch(q, page)
//       .then((data) => {
//         console.log(data);
//         if (data.length > 0) {
//           this.setState((prev) => ({
//             images: [...prev.images, ...data],
//             page: prev.page + 1,
//           }));
//         }
//       })
//       .catch((error) => console.log(error));
//   };

//   componentDidMount() {}

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.q !== this.state.q) {
//       this.fetchImages();
//     }
//   }

//   componentWillUnmount() {}

//   handleSubmit = searchQuery => {
//     this.setState({ query: searchQuery, page: 1, data: [] });
//   };

//   handleChange = ({ target }) => {
//     const { value, name } = target;
//     this.setState({
//       [name]: value,
//     });
//   };
//   getLargeImg = image => {
//     this.setState({
//       largeImageURL: image,
//     });
//   };
//   closeModal = () => {
//     this.setState({
//       largeImageURL: '',
//     });
//   };

//   render() {
//     return (
//       <>
//         <Searchbar getQ={this.getQ} />
//         <ImageGallery props={this.state.images} />
//         <Button />
//         <Load />
//         <Modal />
//       </>
//     );
//   }
// }

// export default App;
