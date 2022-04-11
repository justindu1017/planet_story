import React, { Component } from "react";
import StoryContent from "./StoryContent";
import StoryMain from "./StoryMain";

export default class US extends Component {
  constructor(props) {
    super(props);
    this.mainStory = "";
    this.taskStory = "";
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
        this.taskStory = res[0].storyTemplate.taskStory;

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
      <div className="App container have">
        <StoryMain
          storyContent={
            this.state.mainStory ? this.state.mainStory : this.mainStory
          }
        />
        {this.state.storys.map((el) => {
          return (
            <StoryContent
              storyContent={el[0]}
              position={el[1]}
              forStory={true}
            />
          );
        })}
        <StoryMain
          storyContent={
            this.state.taskStory ? this.state.taskStory : this.taskStory
          }
        />
      </div>
    );
  }
}
