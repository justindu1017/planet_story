import React, { Component } from "react";
import StoryContent from "./Components/StoryContent";
import StoryMain from "./Components/StoryMain";

export default class userSide extends Component {
  constructor(props) {
    super(props);
    this.mainStory = "";
    this.state = {
      memberInfo: [],
      storyTemplate: [],
      subProgress: [],
      mainStory: "",
      storys: [],
    };
  }

  componentDidMount() {
    this.fetchStoryProgress("62547ca218e61b19371368f8")
      .then((res) => res.json())
      .then((res) => {
        this.setState({ mainStory: res[0].storyTemplate.background });
        this.mainStory = res[0].storyTemplate.background;
        this.setState({ memberInfo: res[0].member });
        this.setState({ storyTemplate: res[0].storyTemplate });
        this.setState({ subProgress: res[0].subProgress });
        let storys = res[0].storyTemplate.storySub;
        const randArr = this.Myrand(3, 0);
        storys = storys.map(function (e, i) {
          return [e, randArr[i]];
        });
        this.setState({ storys: storys });
      });
  }
  fetchStoryProgress(id) {
    return fetch("http://localhost:5000/api/storyProgress/getByMember", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ member: id }),
    });
  }

  Myrand(max, min) {
    let arr = [];
    for (let i = 0; i < max; i++) {
      let x = Math.floor(Math.random() * max) + min;
      if (arr.includes(x) === true) {
        i = i - 1;
      } else {
        if (x > max == false) {
          arr.push(x);
        }
      }
    }
    return arr;
  }
  render() {
    return (
      
    );
  }
}
