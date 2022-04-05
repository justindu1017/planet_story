import React, { Component } from "react";
import StoryContent from "./StoryContent";
import StoryPic from "./StoryPic";

export default class StoryMain extends Component {
  render() {
    const { story } = this.props;

    return (
      <div className="d-flex">
        <StoryContent MainStory={true} story={story} />
        <StoryPic MainStory={true} />
      </div>
    );
  }
}
