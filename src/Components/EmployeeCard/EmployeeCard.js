import React, { useContext } from "react";
import "./EmployeeCard.css";
import { userContext } from "../../Context/userContext";

const EmployeeCard = ({ id, name, email }) => {
  const { businessUnit, setBusinessUnit, activeSeg } = useContext(userContext);

  const handleEmployeeDelete = () => {
    const results = businessUnit[activeSeg].employees.filter(
      (ele, ind) => ind !== id
    );
    businessUnit[activeSeg].employees = results;
    setBusinessUnit([
      ...businessUnit,
      (businessUnit[activeSeg].employees = results),
    ]);
  };

  return (
    <div className="employee-card--container">
      <button
        onClick={() => handleEmployeeDelete()}
        className="button employee-card--button"
      >
        X
      </button>
      <img src="https://i.stack.imgur.com/lAwxR.png" alt="avatar" />
      <div>
        <p>Name:- {name}</p>
        <p>Email:- {email}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;
