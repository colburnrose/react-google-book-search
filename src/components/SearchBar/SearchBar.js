import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <p>
        <input
          type="text"
          value={this.props.query}
          placeholder="Book Search"
          aria-label="Book Search"
          onChange={(e) => this.props.handleChange("query", e.target.value)}
        />
        <input type="submit" value="Submit" />
      </p>
    );
  }
}

export default SearchBar;
