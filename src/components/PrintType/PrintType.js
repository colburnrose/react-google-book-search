import React, { Component } from "react";

class PrintType extends Component {
  render() {
    return (
      <select
        id="printType"
        value={this.props.printType}
        onChange={(e) => this.props.handleChange("printType", e.target.value)}
      >
        <option value="all">All</option>
        <option value="books">Books</option>
        <option value="magazines">Magazines</option>
      </select>
    );
  }
}

export default PrintType;
