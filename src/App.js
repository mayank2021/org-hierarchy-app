import "./App.css";
import Nav from "./Components/Nav/Nav";
import SideBar from "./Components/SideBar/SideBar";
import ShowData from "./Components/ShowData/ShowData";
import AddUnit from "./Components/AddUnit/AddUnit";
import AddEmployee from "./Components/AddEmployee/AddEmployee";

function App() {
  return (
    <div>
      <Nav />
      <div className="main-app--container">
        <SideBar />
        <ShowData />
        <AddUnit />
        <AddEmployee />
      </div>
    </div>
  );
}

export default App;
