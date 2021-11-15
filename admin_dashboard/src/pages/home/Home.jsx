import React from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userDataset } from "../../dummyData.js";
import SmallWidget from "../../components/smallWidget/SmallWidget";
import LargeWidget from "../../components/largeWidget/LargeWidget";

function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        dataset={userDataset}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <SmallWidget />
        <LargeWidget />
      </div>
    </div>
  );
}

export default Home;
