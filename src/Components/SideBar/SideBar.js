import React, { useContext } from "react";
import "./SideBar.css";
import { userContext } from "../../Context/userContext";

const SideBar = () => {
  const { businessUnit, activeSeg, setBusinessUnit, setActiveSeg } =
    useContext(userContext);

  const handleDelete = (ind) => {
    const results = businessUnit.filter((ele, index) => index !== ind);
    setBusinessUnit(results);
    setActiveSeg("org");
  };
  return (
    <div className="sidebar-container">
      <p
        className={`org-heading ${activeSeg === "org" ? "activeUnit" : null}`}
        onClick={() => setActiveSeg("org")}
      >
        timecampus.com
      </p>
      <ul className="sidebar-ul">
        {businessUnit &&
          businessUnit.map((ele, ind) => {
            if (ele.unitName) {
              return (
                <li key={ind}>
                  <div
                    className={`sidebar-unit-button--container ${
                      activeSeg === ind ? "activeUnit" : null
                    }`}
                  >
                    <p
                      className={`unit-heading ${
                        activeSeg === ind ? "activeUnit" : null
                      }`}
                      onClick={() => setActiveSeg(ind)}
                    >
                      {ele.unitName}
                    </p>
                    <button
                      onClick={() => handleDelete(ind)}
                      className="button button-secondary delete-unit--button"
                    >
                      Delete
                    </button>
                  </div>

                  {ele.employees ? (
                    <ul className="show-employees--ul">
                      {ele.employees.map((ele, ind) => {
                        return <li key={ind}>{ele.email}</li>;
                      })}
                    </ul>
                  ) : null}
                </li>
              );
            }
          })}
      </ul>
    </div>
  );
};

export default SideBar;
