import { toast } from "react-toastify";
import { TaskContainer, SearchContainer } from "../components/indexComponents";
import customFetch from "../utils/customfetch";
import { useLoaderData } from "react-router-dom";
import { React, useContext, createContext } from "react";
import "../assets/styles/components.css";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/task");
    return { data };
  } catch (error) {
    toast.error(error?.response?.data);
    return error;
  }
};
const AllTasksContext = createContext();

const AllTasks = () => {
  const { data } = useLoaderData();

  return (
    <AllTasksContext.Provider value={{ data }}>
      <div className="allTaskContainer">
        <SearchContainer />
        <TaskContainer />
      </div>
    </AllTasksContext.Provider>
  );
};
export const useAllTasksContext = () => useContext(AllTasksContext);
export default AllTasks;
