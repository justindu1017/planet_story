import React, { Component } from "react";

export default class BE_StoryEdit extends Component {
  send(e) {
    e.preventDefault();
    const storyID = document.getElementById("storyID").value;
    const name = document.getElementById("name").value;
    const background = document.getElementById("background").value;
    const storyMain = document.getElementById("storyMain").value;
    const storySub1 = document.getElementById("storySub1").value;
    const storySub2 = document.getElementById("storySub2").value;
    const storySub3 = document.getElementById("storySub3").value;
    const task = document.getElementById("task").value;
    const taskStory = document.getElementById("taskStory").value;
    const badge = document.getElementById("badge").value;

    let body = {};
    body.storyID = storyID;
    body.name = name;
    body.background = background;
    body.storyMain = storyMain;
    body.storySub1 = storySub1;
    body.storySub2 = storySub2;
    body.storySub3 = storySub3;
    body.task = task;
    body.taskStory = taskStory;
    body.badge = badge;

    fetch("http://localhost:5000/api/storyTemplate/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => {});
    window.location.reload(false);
  }

  render() {
    return (
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="storyID" className="form-label">
              storyID
            </label>
            <input className="form-control" id="storyID"></input>
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              name
            </label>
            <input className="form-control" id="name"></input>
          </div>
          <div className="mb-3">
            <label htmlFor="background" className="form-label">
              background
            </label>
            <input className="form-control" id="background"></input>
          </div>
          <div className="mb-3">
            <label htmlFor="storyMain" className="form-label">
              storyMain
            </label>
            <input className="form-control" id="storyMain"></input>
          </div>
          <div className="mb-3">
            <label htmlFor="storySub1" className="form-label">
              storySub1
            </label>
            <input className="form-control" id="storySub1"></input>
          </div>
          <div className="mb-3">
            <label htmlFor="storySub2" className="form-label">
              storySub2
            </label>
            <input className="form-control" id="storySub2"></input>
          </div>
          <div className="mb-3">
            <label htmlFor="storySub3" className="form-label">
              storySub3
            </label>
            <input className="form-control" id="storySub3"></input>
          </div>
          <div className="mb-3">
            <label htmlFor="task" className="form-label">
              task
            </label>
            <input className="form-control" id="task"></input>
          </div>
          <div className="mb-3">
            <label htmlFor="taskStory" className="form-label">
              taskStory
            </label>
            <input className="form-control" id="taskStory"></input>
          </div>
          <div className="mb-3">
            <label htmlFor="badge" className="form-label">
              badge
            </label>
            <input className="form-control" id="badge"></input>
          </div>
          <button onClick={this.send} className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
