import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
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
        <TwitterTweetEmbed tweetId={"1308819908474671106"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="fcbarcelona"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://www.instagram.com/watt_177/"}
          options={{ text: "#reactja is awesome!", via: "watt_177" }}
        />
      </div>
    </div>
  );
};

export default Widgets;
