import React, { useState, useContext } from "react";
import "./AddUnit.css";
import { userContext } from "../../Context/userContext";

const AddUnit = () => {
  const { addUnitModal, setAddUnitModal, businessUnit, setBusinessUnit } =
    useContext(userContext);
  const [unit, setUnit] = useState({
    unitName: "",
    location: "",
    employees: [],
  });

  const handleSubmit = (eve) => {
    eve.preventDefault();
    setBusinessUnit(() => [...businessUnit, unit]);
    setUnit({ ...unit, unitName: "", location: "" });
  };
  return (
    <div className={`addunit-container ${addUnitModal ? "modal-open" : ""}`}>
      <div className="head-button--container">
        <h1>Add Unit</h1>
        <button
          className="button cancel-button button-secondary"
          onClick={() => setAddUnitModal(false)}
        >
          X
        </button>
      </div>
      <form className="add-unit--form" onSubmit={(eve) => handleSubmit(eve)}>
        <input
          className="add-unit--input"
          type="text"
          value={unit.unitName}
          onChange={(e) => setUnit({ ...unit, unitName: e.target.value })}
          placeholder="Unit Name"
          required
        />
        <input
          className="add-unit--input"
          type="text"
          value={unit.location}
          onChange={(e) => setUnit({ ...unit, location: e.target.value })}
          placeholder="Unit Location"
          required
        />
        <button
          className="button  button-primary addunit-form--button"
          type="submit"
        >
          add unit
        </button>
      </form>
    </div>
  );
};

export default AddUnit;
