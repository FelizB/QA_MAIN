import { toast } from "react-toastify";
import { TaskContainer, SearchContainer } from "../components/indexComponents";
import customFetch from "../utils/customfetch";
import { useLoaderData } from "react-router-dom";
import { React, useContext, createContext, useEffect, useState } from "react";
import "../assets/styles/components.css";
import axios from "axios";

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
<<<<<<< HEAD
  const [allTasks, setAllTasks] = useState([]);
  const [userTasks, setUserTasks] = useState([]);
=======
>>>>>>> 2cbb334adaa4b266314d344e8675b1e1391f9f44
  try {
    const { data } = await customFetch.get("/task/UserTasks", { params });
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
