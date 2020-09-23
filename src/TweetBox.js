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
          {/* <input placeholder="Enter image URL" type="text" /> */}
        </div>
        <Button>Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
