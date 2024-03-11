import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <>
        <img src={this.props.linkImg} alt={this.props.textImg} className="mb" />
      </>
    );
  }
}

export default ImageComponent;
