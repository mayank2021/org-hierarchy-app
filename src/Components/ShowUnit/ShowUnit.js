import React, { useState, useContext } from "react";
import "./ShowUnit.css";
import { userContext } from "../../Context/userContext";
import EmployeeCard from "../EmployeeCard/EmployeeCard";

const ShowUnit = () => {
  const { setAddEmployeeModal, activeSeg, businessUnit, setBusinessUnit } =
    useContext(userContext);
  const [showEmp, setShowEmp] = useState(false);
  return (
    <div className="showdata-container">
      <div className="showdata-top--container">
        <h1>timecampus.com</h1>
        <div>
          <button
            className="button button-primary"
            onClick={() => setAddEmployeeModal(true)}
          >
            Add Employees
          </button>
          <button
            onClick={() =>
              setBusinessUnit([
                ...businessUnit,
                (businessUnit[activeSeg].employees = []),
              ])
            }
            className="button button-secondary"
          >
            Delete All Employees
          </button>
        </div>
      </div>

      <h4 style={{ margin: "20px 0" }}>
        BusinessUnit Name:-{" "}
        {businessUnit.length && businessUnit[activeSeg]
          ? businessUnit[activeSeg].unitName
          : null}
      </h4>
      <h4 style={{ margin: "20px 0" }}>
        No. of employees:-{" "}
        {businessUnit.length && businessUnit[activeSeg]
          ? businessUnit[activeSeg].employees.length
          : null}
      </h4>
      <h4 style={{ margin: "20px 0" }}>
        Location:-{" "}
        {businessUnit.length && businessUnit[activeSeg]
          ? businessUnit[activeSeg].location
          : null}
      </h4>
      <div>
        <button
          onClick={() => setShowEmp(!showEmp)}
          className="button button-primary view-employee-button"
        >
          {showEmp ? "Hide Employees" : "View Employees"}
        </button>
        <div>
          {showEmp ? (
            <div>
              <h3 style={{ margin: "20px 0" }}>Unit Employees</h3>
              <div className="employee-main--container">
                {businessUnit.length &&
                businessUnit[activeSeg] &&
                businessUnit[activeSeg].employees.length ? (
                  businessUnit[activeSeg].employees.map((ele, ind) => {
                    return (
                      <EmployeeCard
                        id={ind}
                        name={ele.name}
                        email={ele.email}
                      />
                    );
                  })
                ) : (
                  <p>No Employee in the list, please add employee.</p>
                )}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ShowUnit;
