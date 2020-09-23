import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const Post = ({ displayName, username, verified, text, image, avatar }) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu8Q7uG_nsWabwL6VURPnHYoEz8zgW0XuIxQmnDQ=s83-c-mo" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Mr Watt{" "}
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" />
                @watt177
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>I built a twitter clone with react </p>
          </div>
          <img
            src="https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
            alt=""
          />
          <div className="post__footer">
            <ChatBubbleOutlineIcon />
            <RepeatIcon />
            <FavoriteBorderIcon />
            <PublishIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
