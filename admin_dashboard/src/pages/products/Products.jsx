import "./products.css";
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { productRows } from "../../dummyData.js";
import { Link } from "react-router-dom";
import { Delete, Edit } from "@material-ui/icons";

function Products() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "product",
      headerName: "Product",
      width: 260,
      renderCell: (params) => {
        return (
          <Link to={"/product/" + params.row.id} className="link">
            <div className="productListItem">
              <img src={params.row.img} alt="" className="productListImg" />
              {params.row.name}
            </div>
          </Link>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 180 },
    {
      field: "status",
      headerName: "Status",
      width: 140,
    },
    {
      field: "price",
      headerName: "Price",
      width: 210,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link className="productListEdit" to={"/product/" + params.row.id}>
              <Edit className="productListEditBtn" />
            </Link>

            <Delete
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="products">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={7}
        checkboxSelection
      />
    </div>
  );
}

export default Products;
