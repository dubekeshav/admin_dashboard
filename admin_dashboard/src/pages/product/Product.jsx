import React from "react";
import "./product.css";
import Chart from "../../components/chart/Chart";
import { productDataset } from "../../dummyData";
import { Publish } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart
            dataset={productDataset}
            dataKey="Sales"
            title="Sales Performance"
          />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1qIV_VAWxlYANxBDsNhWeDeId9doQdLDLTw&usqp=CAU"
              alt=""
              className="productInfoImg"
            />
            <span className="productName">Apple IPhone 12 Mini</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">5642</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">active:</span>
              <span className="productInfoValue">yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Apple IPhone 12 Mini" />
            <label>In Stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1qIV_VAWxlYANxBDsNhWeDeId9doQdLDLTw&usqp=CAU"
                alt=""
                className="productUploadImg"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <div className="button productButton">Update</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
