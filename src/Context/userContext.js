import React, { createContext, useState } from "react";

export const userContext = createContext();

const UserContextProvider = ({ children }) => {
  const data = [
    {
      unitName: "Unit 1",
      location: "Delhi, India",
      employees: [
        { name: "mayank", email: "mayank@timecampus.com" },
        { name: "vignesh", email: "vignesh@timecampus.com" },
      ],
    },
    {
      unitName: "Unit 2",
      location: "Chennai, India",
      employees: [{ name: "mayank1.0", email: "mayank1.0@timecampus.com" }],
    },
  ];
  const [businessUnit, setBusinessUnit] = useState(data);
  const [activeSeg, setActiveSeg] = useState("org");
  const [addUnitModal, setAddUnitModal] = useState(false);
  const [addEmployeeModal, setAddEmployeeModal] = useState(false);

  return (
    <userContext.Provider
      value={{
        businessUnit,
        setBusinessUnit,
        activeSeg,
        setActiveSeg,
        addUnitModal,
        setAddUnitModal,
        addEmployeeModal,
        setAddEmployeeModal,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
