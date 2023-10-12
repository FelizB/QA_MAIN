import React from "react";
import ProductStats from "./ProductStats";

function StatsContainer({ data }) {
  return (
    <div className="stats-container2">
      <div className="">
        <div className=" ">
          <ProductStats data={data} />
        </div>
      </div>
    </div>
  );
}

export default StatsContainer;
