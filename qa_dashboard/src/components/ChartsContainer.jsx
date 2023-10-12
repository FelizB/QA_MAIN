import React from "react";
import {
  AreaChartComponent,
  BarChartComponent,
  PieChartComponent,
  DashAssigned,
} from "./indexComponents";

const ChartsContainer = ({ data, data2, data3, data4 }) => {
  return (
    <div className="chartsContainer container">
      <div className="item-2">
        <div className="dash-1">
          <div className="areaChart-container">
            <div className="tasks-card-container ">
              <div className="task-text-container">
                <h6>Total Number of Tasks</h6>
                <div className="items">
                  <p>
                    Pending <span> 30</span>
                  </p>
                  <p>
                    Asigned <span> 30</span>
                  </p>
                </div>
              </div>
              <div className="report-btn-container">
                <button className="report-btn">View Report</button>
              </div>
            </div>

            <AreaChartComponent data={data2} />
          </div>
        </div>

        <div className="pie-chart dash-1">
          <PieChartComponent data={data2} />
        </div>
      </div>
      <div className="item-3">
        <div className="dash-1">
          <DashAssigned data={data4} />
        </div>
        <div className="dash-1">
          <BarChartComponent data={data3} />
        </div>
      </div>
    </div>
  );
};

export default ChartsContainer;
