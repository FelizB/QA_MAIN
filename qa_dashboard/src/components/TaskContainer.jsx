import React, { useState } from "react";
import AdminTaskView from "../pages/adminTaskView";
import "../assets/styles/components.css";
import { useDashboardContext } from "../pages/DashboardLayout";
import UserTaskContainer from "./UserTaskContainer";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

const TaskContainer = () => {
  const { user } = useDashboardContext();
  const myValue = localStorage.getItem("tabValue");
  let number;
  myValue ? (number = myValue) : (number = "1");
  const [value, setValue] = useState(number);
  const handleChange = (event) => {
    setValue(event);
    localStorage.setItem("tabValue", event);
    console.log(event);
  };

  if (user.Role === "Admin") {
    return (
      <div className="taskContainer">
        <div className="text-center">
          <Box
            sx={{
              width: "100%",
              typography: "body1",
            }}
          >
            <TabContext
              value={value}
              sx={{
                padding: "-10px",
              }}
            >
              <Box
                sx={{
                  borderBottom: "-5px",
                  borderColor: "divider",
                }}
              >
                <TabList aria-label="lab API tabs example">
                  <Tab
                    className="box-divider"
                    label="Admin View"
                    value="1"
                    onClick={() => handleChange("1")}
                  />
                  <Tab
                    className="box-divider"
                    label="User view"
                    value="2"
                    onClick={() => handleChange("2")}
                  />
                </TabList>
              </Box>
              <TabPanel value="1" sx={{ marginInline: "-20px" }}>
                <AdminTaskView />
              </TabPanel>
              <TabPanel value="2">
                <UserTaskContainer />
              </TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>
    );
  }
  return <UserTaskContainer />;
};

export default TaskContainer;
