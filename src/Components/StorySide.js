import React, { Component } from "react";
import StoryContent from "./StoryContent";
import StoryPic from "./StoryPic";

export default class StorySide extends Component {
  render() {
    const { story } = this.props;

    return (
      <div className="d-flex">
        <StoryContent SideStory={true} story={story} />
        <StoryPic SideStory={true} />
      </div>
    );
  }
}
