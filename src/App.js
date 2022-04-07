// import "./App.css";
import React, { Component } from "react";
import StoryContent from "./Components/StoryContent";
import StoryMain from "./Components/StoryMain";
import StorySide from "./Components/StorySide";

export default class App extends Component {
  render() {
    const storys = [
      "窩是主線描述\n窩是主線描述\n窩是主線描述\n窩是主線描述\n窩是主線描述\n窩是主線描述\n窩是主線描述\n窩是主線描述\n窩是主線描述\n窩是主線描述\n窩是主線描述\n窩是主線描述\n窩是主線描述\n窩是主線描述\n窩是主線描述\n窩是主線描述\n窩是主線描述\n窩是主線描述\n窩是主線描述\n窩是主線描述\n窩是主線描述\n窩是主線描述\n",
      "窩是故事一\n窩是故事一\n窩是故事一\n窩是故事一\n窩是故事一\n窩是故事一\n窩是故事一\n窩是故事一\n窩是故事一\n窩是故事一\n窩是故事一\n窩是故事一\n窩是故事一\n窩是故事一\n窩是故事一\n窩是故事一\n窩是故事一\n窩是故事一\n窩是故事一\n窩是故事一\n窩是故事一\n窩是故事一\n窩是故事一\n窩是故事一\n窩是故事一\n窩是故事一\n",
      "窩是故事二\n窩是故事二\n窩是故事二\n窩是故事二\n窩是故事二\n窩是故事二\n窩是故事二\n窩是故事二\n窩是故事二\n窩是故事二\n窩是故事二\n窩是故事二\n窩是故事二\n窩是故事二\n窩是故事二\n窩是故事二\n窩是故事二\n窩是故事二\n窩是故事二\n窩是故事二\n窩是故事二\n窩是故事二\n窩是故事二\n窩是故事二\n窩是故事二\n窩是故事二\n",
      "窩是故事三\n窩是故事三\n窩是故事三\n窩是故事三\n窩是故事三\n窩是故事三\n窩是故事三\n窩是故事三\n窩是故事三\n窩是故事三\n窩是故事三\n窩是故事三\n窩是故事三\n窩是故事三\n窩是故事三\n窩是故事三\n窩是故事三\n窩是故事三\n窩是故事三\n窩是故事三\n窩是故事三\n窩是故事三\n窩是故事三\n窩是故事三\n窩是故事三\n窩是故事三\n",
    ];

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
