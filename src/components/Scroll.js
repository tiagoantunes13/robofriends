import React from "react";

class Scroll extends React.Component {
  render() {
    return (
      <div
        style={{
          overflowY: "scroll",
          height: "700px",
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Scroll;
