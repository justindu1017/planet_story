// import "./App.css";
import React, { Component } from "react";
import StoryContent from "./Components/StoryContent";
import StoryMain from "./Components/StoryMain";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memberInfo: [],
      storyTemplate: [],
      subProgress: [],
    };
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
  componentDidMount() {
    this.fetchStoryProgress("62547ca218e61b19371368f8")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({ memberInfo: res[0].member });
        this.setState({ storyTemplate: res[0].storyTemplate });
        this.setState({ subProgress: res[0].subProgress });
      });
  }
  render() {
    console.log(this.state.memberInfo);

    const mainStory = this.state.storyTemplate.background;

    let storys = this.state.storyTemplate;
    function Myrand(max, min) {
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

    let randArr = Myrand(3, 0);
    console.log(randArr);
    storys = storys.map(function (e, i) {
      return [e, randArr[i]];
    });

    return (
      <div className="App container">
        <StoryMain storyContent={mainStory} />
        {storys.map((el) => {
          return (
            <StoryContent
              storyContent={el[0]}
              position={el[1]}
              forStory={true}
            />
          );
        })}
        <StoryMain storyContent={mainStory} />
      </div>
    );
  }
}
