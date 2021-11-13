import { Visibility } from "@material-ui/icons";
import React from "react";
import "./smallWidget.css";

function SmallWidget() {
  return (
    <div className="smallWidget">
      <span className="smallWidgetTitle">New Members</span>
      <ul className="smallWidgetList">
        <li className="smallWidgetListItem">
          <img
            src="https://variety.com/wp-content/uploads/2021/06/Jennifer-Lopez.jpg?w=681&h=383&crop=1"
            alt=""
            className="smallWidgetUserDP"
          />
          <div className="smallWidgetUser">
            <span className="smallWidgetUsername">Jennifer Lopez</span>
            <span className="smallWidgetUserProfession">Singer</span>
          </div>
          <button className="smallWidgetButton">
            <Visibility className="smallWidgetIcon" /> Display
          </button>
        </li>
        <li className="smallWidgetListItem">
          <img
            src="https://variety.com/wp-content/uploads/2021/06/Jennifer-Lopez.jpg?w=681&h=383&crop=1"
            alt=""
            className="smallWidgetUserDP"
          />
          <div className="smallWidgetUser">
            <span className="smallWidgetUsername">Jennifer Lopez</span>
            <span className="smallWidgetUserProfession">Singer</span>
          </div>
          <button className="smallWidgetButton">
            <Visibility className="smallWidgetIcon" /> Display
          </button>
        </li>
        <li className="smallWidgetListItem">
          <img
            src="https://variety.com/wp-content/uploads/2021/06/Jennifer-Lopez.jpg?w=681&h=383&crop=1"
            alt=""
            className="smallWidgetUserDP"
          />
          <div className="smallWidgetUser">
            <span className="smallWidgetUsername">Jennifer Lopez</span>
            <span className="smallWidgetUserProfession">Singer</span>
          </div>
          <button className="smallWidgetButton">
            <Visibility className="smallWidgetIcon" /> Display
          </button>
        </li>
        <li className="smallWidgetListItem">
          <img
            src="https://variety.com/wp-content/uploads/2021/06/Jennifer-Lopez.jpg?w=681&h=383&crop=1"
            alt=""
            className="smallWidgetUserDP"
          />
          <div className="smallWidgetUser">
            <span className="smallWidgetUsername">Jennifer Lopez</span>
            <span className="smallWidgetUserProfession">Singer</span>
          </div>
          <button className="smallWidgetButton">
            <Visibility className="smallWidgetIcon" /> Display
          </button>
        </li>
        <li className="smallWidgetListItem">
          <img
            src="https://variety.com/wp-content/uploads/2021/06/Jennifer-Lopez.jpg?w=681&h=383&crop=1"
            alt=""
            className="smallWidgetUserDP"
          />
          <div className="smallWidgetUser">
            <span className="smallWidgetUsername">Jennifer Lopez</span>
            <span className="smallWidgetUserProfession">Singer</span>
          </div>
          <button className="smallWidgetButton">
            <Visibility className="smallWidgetIcon" /> Display
          </button>
        </li>
      </ul>
    </div>
  );
}

export default SmallWidget;
