import React, { Component } from "react";

export default class StoryPic extends Component {
  render() {
    const { MainStory, SideStory } = this.props;
    let style = "";

    return (
      <div
        className={
          MainStory ? style + " w-50" : SideStory ? style + " w-25" : style
        }
      >
        窩是圖片
      </div>
    );
  }
}
