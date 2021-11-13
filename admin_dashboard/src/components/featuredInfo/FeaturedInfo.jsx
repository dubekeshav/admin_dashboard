import React from "react";
import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <div className="featuredSub">Compare to last month</div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$24,415</span>
          <span className="featuredMoneyRate">
            -2.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <div className="featuredSub">Compare to last month</div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$12,415</span>
          <span className="featuredMoneyRate">
            +1.7 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <div className="featuredSub">Compare to last month</div>
      </div>
    </div>
  );
}

export default FeaturedInfo;
