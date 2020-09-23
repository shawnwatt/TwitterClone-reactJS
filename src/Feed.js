import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import db from "./firebase";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <Post
        displayName="mr watt"
        username="watt__177"
        verified={true}
        text="i built a twitter clone using Reactjs 🔥"
        avatar="https://lh3.googleusercontent.com/ogw/ADGmqu8Q7uG_nsWabwL6VURPnHYoEz8zgW0XuIxQmnDQ=s83-c-mo"
        image="https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
      />
    </div>
  );
};

export default Feed;
