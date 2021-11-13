import React from "react";
import "./largeWidget.css";

function SmallWidget() {
  const Button = ({ type }) => {
    return <button className={"largeWidgetButton " + type}>{type}</button>;
  };

  return (
    <div className="largeWidget">
      <div className="largeWidgetTitle">Latest Transactions</div>
      <table className="largeWidgetTable">
        <tr className="largeWidgetTr">
          <th className="largeWidgetTh">Customer</th>
          <th className="largeWidgetTh">Date</th>
          <th className="largeWidgetTh">Amount</th>
          <th className="largeWidgetTh">Status</th>
        </tr>
        <tr className="largeWidgetTr">
          <td className="largeWidgetUser">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf-pyhZRJ530v7sTed2Zb74QqvGw5Oh3fVoQ&usqp=CAU"
              alt=""
              className="largeWidgetUserImg"
            />
            <span className="largeWidgetName">Brad Pitt</span>
          </td>
          <td className="largeWidgetDate">12 Nov 2021</td>
          <td className="largeWidgetAmount">$122.00</td>
          <td className="largeWidgetStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="largeWidgetTr">
          <td className="largeWidgetUser">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf-pyhZRJ530v7sTed2Zb74QqvGw5Oh3fVoQ&usqp=CAU"
              alt=""
              className="largeWidgetUserImg"
            />
            <span className="largeWidgetName">Brad Pitt</span>
          </td>
          <td className="largeWidgetDate">12 Nov 2021</td>
          <td className="largeWidgetAmount">$122.00</td>
          <td className="largeWidgetStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="largeWidgetTr">
          <td className="largeWidgetUser">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf-pyhZRJ530v7sTed2Zb74QqvGw5Oh3fVoQ&usqp=CAU"
              alt=""
              className="largeWidgetUserImg"
            />
            <span className="largeWidgetName">Brad Pitt</span>
          </td>
          <td className="largeWidgetDate">12 Nov 2021</td>
          <td className="largeWidgetAmount">$122.00</td>
          <td className="largeWidgetStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="largeWidgetTr">
          <td className="largeWidgetUser">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf-pyhZRJ530v7sTed2Zb74QqvGw5Oh3fVoQ&usqp=CAU"
              alt=""
              className="largeWidgetUserImg"
            />
            <span className="largeWidgetName">Brad Pitt</span>
          </td>
          <td className="largeWidgetDate">12 Nov 2021</td>
          <td className="largeWidgetAmount">$122.00</td>
          <td className="largeWidgetStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="largeWidgetTr">
          <td className="largeWidgetUser">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf-pyhZRJ530v7sTed2Zb74QqvGw5Oh3fVoQ&usqp=CAU"
              alt=""
              className="largeWidgetUserImg"
            />
            <span className="largeWidgetName">Brad Pitt</span>
          </td>
          <td className="largeWidgetDate">12 Nov 2021</td>
          <td className="largeWidgetAmount">$122.00</td>
          <td className="largeWidgetStatus">
            <Button type="Declined" />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default SmallWidget;
