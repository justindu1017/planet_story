import React, { Component } from "react";

export default class StoryContent extends Component {
  render() {
    const { MainStory, story, SideStory } = this.props;
    let style =
      "border border-white border-3 bg-white bg-opacity-50 text-break my-2 rounded-3 p-2";

    return (
      <div
        className={
          MainStory ? style + " w-50" : SideStory ? style + " w-75" : style
        }
      >
        {story}
      </div>
    );
  }
}
