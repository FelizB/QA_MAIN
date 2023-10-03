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
  const { defaultStats, monthlyDeliverable } = useLoaderData();

  return (
    <div>
      <StatsContainer defaultStats={defaultStats} />
      <ChartsContainer data={monthlyDeliverable} />
    </div>
  );
};

export default Stats;
