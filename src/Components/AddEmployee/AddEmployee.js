import React, { useState, useContext } from "react";
import { userContext } from "../../Context/userContext";

const AddEmployee = () => {
  const {
    addEmployeeModal,
    setAddEmployeeModal,
    businessUnit,
    setBusinessUnit,
    activeSeg,
  } = useContext(userContext);
  const [addEmployee, setaddEmployee] = useState({ name: "", email: "" });

  const handleSubmit = (eve) => {
    eve.preventDefault();
    // const activeItem = [...businessUnit[activeSeg].employees, addEmployee];
    // setBusinessUnit(() => [...businessUnit, businessUnit[activeSeg].employees]);
    businessUnit[activeSeg].employees.push(addEmployee);
    setaddEmployee({ name: "", email: "" });
  };
  return (
    <div
      className={`addunit-container ${addEmployeeModal ? "modal-open" : ""}`}
    >
      <div className="head-button--container">
        <h1>Add Employee</h1>
        <button
          className="button cancel-button button-secondary"
          onClick={() => setAddEmployeeModal(false)}
        >
          X
        </button>
      </div>
      <form className="add-unit--form" onSubmit={(eve) => handleSubmit(eve)}>
        <input
          className="add-unit--input"
          type="text"
          value={addEmployee.name}
          onChange={(e) =>
            setaddEmployee({ ...addEmployee, name: e.target.value })
          }
          placeholder="Name"
          required
        />
        <input
          className="add-unit--input"
          type="text"
          value={addEmployee.email}
          onChange={(e) =>
            setaddEmployee({ ...addEmployee, email: e.target.value })
          }
          placeholder="Email"
          required
        />
        <button
          className="button  button-primary addunit-form--button"
          type="submit"
        >
          add employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
