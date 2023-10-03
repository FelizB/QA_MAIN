import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import customFetch from "../utils/customfetch";

const TaskStatus = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    testData();
  }, []);

  const testData = async () => {
    try {
      await customFetch.get("/task").then((data) => {
        setData(data.data.tasks);
      });
    } catch (error) {
      toast.error(error?.response?.data);
      return error;
    }
  };

  return (
    <div class="col">
      <div class="card mb-4 ">
        <div class="card-body">
          <p class="mb-4">
            <span> Project Status</span>
          </p>

          {data.map((task) => {
            let barColor;
            if (task.Progress <= 50) {
              barColor = "purple";
            } else if (task.Progress > 50) {
              barColor = "green";
            }

            return (
              <div>
                <p class="mb-1 mb-2">{task.ProjectName}</p>
                <div class="progress rounded mb-1 mb-3">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{ width: task.Progress + "%", background: barColor }}
                    aria-valuenow={task.Progress.toString()}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TaskStatus;
