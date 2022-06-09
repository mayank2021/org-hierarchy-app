import React, { useContext } from "react";
import "./ShowData.css";
import { userContext } from "../../Context/userContext";
import ShowUnit from "../ShowUnit/ShowUnit";

const ShowData = () => {
  const { businessUnit, setBusinessUnit, activeSeg, setAddUnitModal } =
    useContext(userContext);
  return (
    <>
      {activeSeg === "org" ? (
        <div className="showdata-container">
          <div className="showdata-top--container">
            <h2 className={`showdata-heading`}>timecampus.com</h2>
            <div className="showdata-button--container">
              <button
                className="button button-primary"
                onClick={() => setAddUnitModal(true)}
              >
                Add Unit
              </button>
              <button
                className="button button-secondary"
                onClick={() => setBusinessUnit([])}
              >
                Delete All Unit
              </button>
            </div>
          </div>
          <h3 style={{ color: "rgba(0,0,0,0.8)" }}>
            No. of Business Units:- {businessUnit.length}
          </h3>
          <h3 style={{ color: "rgba(0,0,0,0.8)", margin: "20px 0 0 0" }}>
            Business Units
          </h3>
          <ul className="org-unit-ul">
            {businessUnit &&
              businessUnit.map((ele, ind) => {
                return <li key={ind}>{ele.unitName}</li>;
              })}
          </ul>
        </div>
      ) : (
        <ShowUnit />
      )}
    </>
  );
};

export default ShowData;
