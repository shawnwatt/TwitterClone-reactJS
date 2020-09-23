import React from "react";
import "./Widgets.css";
import {
  TwitterTimelieEmbded,
  TwitterShareButton,
  TwitterTwetEmbeb,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchInput" />
        <input type="text" placeholder="search Twitter" />
      </div>
      <div className="widgets__widgetsContainer">
        <h2>What's happening?</h2>
      </div>
    </div>
  );
};

export default Widgets;
