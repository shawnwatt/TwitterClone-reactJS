import { Avatar, Button } from "@material-ui/core";
import React from "react";
import "./TweetBox.css";

const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu8Q7uG_nsWabwL6VURPnHYoEz8zgW0XuIxQmnDQ=s83-c-mo" />
          <input placeholder="What's happening?" type="text" />
        </div>
        <input
          className="tweetBox__ImageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
