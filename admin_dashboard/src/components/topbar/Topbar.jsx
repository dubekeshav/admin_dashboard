import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topleft">
          <Link to="/" className="logoLink">
            <span className="logo">uAdmin</span>
          </Link>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">1</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
            <span className="topIconBadge">4</span>
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
