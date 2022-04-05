// import "./App.css";
import React, { Component } from "react";
import StoryContent from "./Components/StoryContent";
import StoryMain from "./Components/StoryMain";
import StorySide from "./Components/StorySide";

export default class App extends Component {
  render() {
    const storys = ["窩是主線描述", "窩是故事一", "窩是故事二", "窩是故事三"];

    return (
      <div className="App container">
        <StoryMain story="窩是大背景" />
        {storys.map((el) => {
          return <StoryContent story={el} />;
        })}
        {/* for sub mission */}

        <StoryContent story="窩是支線描述" />
        <StorySide story="窩是支線結局" />

        {/* end for sub mission */}
      </div>
    );
  }
}
