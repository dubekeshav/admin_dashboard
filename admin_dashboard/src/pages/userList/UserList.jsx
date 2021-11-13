import React, { useState } from "react";
import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { Delete, Edit } from "@material-ui/icons";
import { userRows } from "../../dummyData.js";
import { Link } from "react-router-dom";

function UserList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "user",
      headerName: "User",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img src={params.row.avatar} alt="" className="userListImg" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 180 },
    {
      field: "status",
      headerName: "Status",
      width: 140,
    },
    {
      field: "transaction",
      headerName: "Transaction Amount",
      width: 210,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {/* <Link to={"/user/" + params.row.id}>
              <Edit className="userListEdit" />
            </Link> */}
            <Link className="userListEdit" to={"/user/" + params.row.id}>
              <Edit className="userListEditBtn" />
            </Link>

            <Delete
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
}

export default UserList;
