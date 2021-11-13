import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topleft">
          <span className="logo">uAdmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">7</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">7</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
            <span className="topIconBadge">7</span>
          </div>
          <img
            src="https://www.cheatsheet.com/wp-content/uploads/2020/11/Marvel-star-Robert-Downey-Jr.jpg"
            alt=""
            className="profilePicture"
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
