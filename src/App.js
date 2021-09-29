import "./App.css";
import StudentRegister from "./Components/Comps/Forms/StudentRegister";
import "./Css/Theme.css";
import StudentsTable from "./Components/Comps/Tables/StudentsTable";
import { Link, Route, Switch } from "react-router-dom";
import React, { useEffect } from "react";
import moment from "moment";
import { studentDetaislGet } from "./API/api";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const studentDetailsArray = [];

    studentDetaislGet()
      .then((response) => {
        const tempArr = response.data;
        const now = moment();
        for (let i = 0; i < tempArr.length; i++) {
          const dob = moment(tempArr[i].dob, "dd-mm-yyyy");
          const studentAge = now.diff(dob, "years");
          studentDetailsArray.push({ ...tempArr[i], age: studentAge });
        }

        dispatch({ type: "initialize", payload: studentDetailsArray });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/add_student">Add New Student</Link>
      <Link to="/display">Display Students</Link>

      <div className="page">
        <Switch>
          <Route path="/add_student" component={StudentRegister} />
          <Route path="/display" component={StudentsTable} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
