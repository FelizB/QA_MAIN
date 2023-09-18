import React from "react";
import {
  SUBSIDIARY,
  PLATFORMS,
  STATUS,
  STATION,
  ROLE,
} from "../utils/constants.js";
import "../assets/styles/components.css";

const AffectedPlatforms = () => {
  return (
    <div className="formInput">
      <label htmlFor="Affected Platforms" className="form-label">
        Affected Platforms
      </label>
      <select
        name="Platforms"
        id="Platforms"
        className="form-select form-control"
        label="Select Subsidiary"
      >
        {PLATFORMS.map((platform) => (
          <option value={platform.label}>{platform.value}</option>
        ))}
      </select>
    </div>
  );
};

const WorkStation = () => {
  return (
    <div className="formInput">
      <label htmlFor="Work Station" className="form-label">
        Work Station
      </label>
      <select
        name="Station"
        id="Station"
        className="form-select form-control"
        label="Work Station"
      >
        {STATION.map((station) => (
          <option value={station.label}>{station.value}</option>
        ))}
      </select>
    </div>
  );
};

const SelectSubsidiary = () => {
  return (
    <div className="formInput">
      <div>
        <label htmlFor="Work Station" className="">
          Subsidiary
        </label>
      </div>
      <br />
      <div className="checkBoxItems">
        {SUBSIDIARY.map((subsidiary) => {
          return (
            <div className="form-check form-check-inline">
              <input
                type="checkbox"
                className="form-check-input checkBoxColor"
                id="Subsidiary"
                name="Subsidiary"
                value={subsidiary.value}
              />
              <label
                name={subsidiary.value}
                className="form-check-label"
                htmlFor="flexCheckDefault"
              >
                {subsidiary.value}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const SelectStatus = () => {
  return (
    <div className="formInput">
      <label htmlFor="Status" className="form-label">
        Select Status
      </label>
      <select
        name="Status"
        id="Status"
        className="form-select form-control"
        label="Select Subsidiary"
      >
        {STATUS.map((status) => (
          <option value={status.value}>{status.value}</option>
        ))}
      </select>
    </div>
  );
};
const SelectRole = () => {
  return (
    <div className="formInput">
      <label htmlFor="Role" className="form-label">
        Select Role
      </label>
      <select
        name="Role"
        id="Role"
        className="form-select form-control"
        label="Select Role"
      >
        {ROLE.map((role) => (
          <option value={role.value}>{role.value}</option>
        ))}
      </select>
    </div>
  );
};
const ShowProgress = () => {
  return (
    <div className="formInput">
      <label htmlFor="Progress" className="form-label">
        Progress
      </label>
      <input
        type="number"
        min="0"
        max="100"
        id="Progress"
        className="form-control"
        name="Progress"
      />
    </div>
  );
};
const DatePicker = (prop) => {
  return (
    <div className="formInput">
      <label htmlFor={prop.label} className="form-label">
        {prop.label}
      </label>
      <input
        type="date"
        id={prop.name}
        name={prop.name}
        label={prop.label}
        className="form-control"
      />
    </div>
  );
};
export {
  SelectSubsidiary,
  AffectedPlatforms,
  WorkStation,
  DatePicker,
  SelectStatus,
  ShowProgress,
  SelectRole,
};