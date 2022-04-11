import React, { Component } from "react";
import StoryContent from "./StoryContent";
import StoryPic from "./StoryPic";

export default class StoryMain extends Component {
  render() {
    const { storyContent } = this.props;
    console.log("sc = ", storyContent);
    return (
      <div className="d-flex">
        <div className="w-50">
          <StoryContent storyContent={storyContent} forStory={false} />
        </div>
        <StoryPic />
      </div>
    );
  }
}
