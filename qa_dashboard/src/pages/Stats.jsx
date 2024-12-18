import React from "react";
import { ChartsContainer, StatsContainer } from "../components/indexComponents";
import { useLoaderData } from "react-router-dom";
import customFetch from "../utils/customfetch";

export const statsLoader = async () => {
  try {
    const response = await customFetch.get("/task/stats");
    return response.data;
  } catch (error) {
    return error;
  }
};

const Stats = () => {
  const {
    userStats,
    monthlyDeliverable,
    ProductHouseCategory,
    ProductPerDate,
    BestPerforming,
    allStats,
  } = useLoaderData();

  return (
    <div className="dash-container">
      <div className="">
        <ChartsContainer
          data={monthlyDeliverable}
          data2={userStats}
          data3={ProductPerDate}
          data4={BestPerforming}
          data5={allStats}
        />
      </div>
      <div className="">
        <StatsContainer data={ProductHouseCategory} />
      </div>
    </div>
  );
};

export default Stats;
