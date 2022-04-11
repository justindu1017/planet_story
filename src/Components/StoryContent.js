import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class StoryContent extends Component {
  constructor(props) {
    super(props);
    this.myFunction = this.myFunction.bind(this);
    this.storyContent = props.storyContent;
    this.position = props.position;
    this.forStory = props.forStory;
    this.divs = [];
    this.state = {
      width: "33%",
    };
  }

  myFunction() {
    var dots = ReactDOM.findDOMNode(this.dots);
    var moreText = ReactDOM.findDOMNode(this.more);
    var btnText = ReactDOM.findDOMNode(this.myBtn);

    var mainDiv = ReactDOM.findDOMNode(this.mainDiv);
    if (dots.style.display === "none") {
      mainDiv.style.width = "33%";
      this.setState({ width: "33%" });

      dots.style.display = "inline";
      btnText.innerHTML = "展開";
      moreText.style.display = "none";
    } else {
      mainDiv.style.width = "100%";
      this.setState({ width: "0%" });
      dots.style.display = "none";
      btnText.innerHTML = "收合";
      moreText.style.display = "inline";
    }
  }

  style =
    "border border-white border-3 bg-white bg-opacity-50 text-break my-2 rounded-3 p-2 ";
  render() {
    return (
      <div className="d-flex w-100">
        {console.log("getting", this.props.storyContent)}

        {this.forStory
          ? Array.from(Array(this.position), (e, i) => {
              let newNode = (
                <div style={{ width: this.state.width }} key={i}></div>
              );
              this.divs.push(newNode);
              return newNode;
            })
          : ""}
        <div
          ref={(mainDiv) => {
            this.mainDiv = mainDiv;
          }}
          style={this.forStory ? { width: "33%" } : {}}
          className={this.forStory ? this.style + " " : this.style + "w-100"}
        >
          <p>
            {this.props.storyContent.slice(0, 20)}
            <span
              ref={(dots) => {
                this.dots = dots;
              }}
            >
              ...
            </span>
            <span
              style={{ display: "none" }}
              ref={(more) => {
                this.more = more;
              }}
            >
              {this.props.storyContent.slice(20)}
            </span>
          </p>
          <button
            onClick={this.myFunction}
            ref={(myBtn) => {
              this.myBtn = myBtn;
            }}
          >
            展開
          </button>
        </div>
      </div>
    );
  }
}
