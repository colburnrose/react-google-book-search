import React, { Component } from "react";
import "./App.css";
import Header from "../src/components/Header/Header";
import PrintType from "./components/PrintType/PrintType";
import BookType from "./components/BookType/BookType";

class App extends Component {
  state = {
    books: [],
    query: "shining",
    printType: "all",
    filter: "",
  };

  searchBooks = () => {
    let url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.query}&printType=${this.state.printType}`;
    if (this.state.filter !== "") {
      url += `&filter=${this.state.filter}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((res) => this.setState({ books: res.items ? res.items : [] }))
      .catch((error) => {
        console.log(error.message);
      });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.searchBooks();
  };

  handleChange = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  componentDidMount() {
    this.searchBooks();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              type="text"
              value={this.state.query}
              placeholder="Book Search"
              aria-label="Book Search"
              onChange={(e) => this.handleChange("query", e.target.value)}
            />
            <input type="submit" value="Submit" />
          </p>

          <p>
            <label htmlFor="printType">Print Type:</label>
            <PrintType
              id={this.state.printType}
              handleChange={this.handleChange}
            />
            <label htmlFor="filter">Book Type:</label>
            <BookType id={this.state.filter} handleChange={this.handleChange} />
          </p>
        </form>
        <p>You searched for "{this.state.query}"</p>
        <p>We found {this.state.books.length} results</p>
        <ul>
          {this.state.books.map((book, i) => (
            <li key={i}>
              {book.volumeInfo.title} - {book.volumeInfo.authors}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
