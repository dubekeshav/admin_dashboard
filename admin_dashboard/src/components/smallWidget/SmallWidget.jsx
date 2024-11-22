import { Visibility } from "@material-ui/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./smallWidget.css";

function SmallWidget() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTYxMjU5MTA3MDExZDE5YmM5MDk1YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzkzODI0MSwiZXhwIjoxNjM4MzcwMjQxfQ.-3hKIaSAv8eaBrDeQkTSwd0X9Pj28aDBptGCHQ3H_ec",
          },
        });
        setNewUsers(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);
  return (
    <div className="smallWidget">
      <span className="smallWidgetTitle">New Members</span>
      <ul className="smallWidgetList">
        {newUsers.map((user) => (
          <li className="smallWidgetListItem">
            <img
              src={
                user.profilePic ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Qou3wNk2Qfs7AN49-mULhwGRomERYXuu_fO3qYsTVkrON8-S67AMUwOTlccNYZhYyvU&usqp=CAU"
              }
              alt=""
              className="smallWidgetUserDP"
            />
            <div className="smallWidgetUser">
              <span className="smallWidgetUsername">{user.username}</span>
            </div>
            <button className="smallWidgetButton">
              <Visibility className="smallWidgetIcon" /> Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SmallWidget;
