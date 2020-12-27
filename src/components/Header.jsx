import React, { Component } from 'react';

class Header extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.headerSpan !== this.props.headerSpan) {
      console.log("props change");
    }
  };
    render() {
    const headerStyle = {
        padding: "20px 0",
        lineHeight: "2em",
    };
    return (
        <header style={headerStyle}>
            <h1 style={{ fontSize: "25px", marginBottom: "15px", }}>
                Simple ToDo App <span id="inH1"></span>
            </h1>
            <p style={{ fontSize: "19px" }}>
                Please add to-do item(s) through the input field
            </p>
        </header>
    );
  }
};

export default Header;