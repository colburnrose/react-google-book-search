import React, { Component } from "react";

class BookType extends Component {
  render() {
    return (
      <select
        id="filter"
        value={this.props.filter}
        onChange={(e) => this.props.handleChange("filter", e.target.value)}
      >
        <option value="">Select ...</option>
        <option value="ebooks">E-Books</option>
        <option value="free-ebooks">Free Ebooks</option>
        <option value="paid-ebooks">Paid Ebooks</option>
        <option value="partial">Partial</option>
      </select>
    );
  }
}

export default BookType;
