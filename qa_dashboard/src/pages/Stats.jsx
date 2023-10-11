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
    defaultStats,
    monthlyDeliverable,
    ProductHouseCategory,
    ProductPerDate,
    BestPerforming,
  } = useLoaderData();

  return (
    <div>
      <div className="">
        <div className="">
          <ChartsContainer
            data={monthlyDeliverable}
            data2={defaultStats}
            data3={ProductPerDate}
            data4={BestPerforming}
          />
        </div>
        <div className="">
          <StatsContainer data={ProductHouseCategory} />
        </div>
      </div>
    </div>
  );
};

export default Stats;
