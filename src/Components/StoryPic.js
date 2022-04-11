import React, { Component } from "react";
import pic from "..\\pic\\planet-earth.png";

export default class StoryPic extends Component {
  render() {
    return (
      <div className="d-flex w-50">
        <img
          style={{
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            justifyItems: "center",
            display: "block",
            margin: "auto",
          }}
          src={pic}
          with="100"
          heigh="200"
          alt="一張圖片"
        ></img>
      </div>
    );
  }
}
