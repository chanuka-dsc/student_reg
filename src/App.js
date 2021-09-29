import "./App.css";
import StudentRegister from "./Components/Comps/Forms/StudentRegister";

import "./Css/Theme.css";
import StudentsTable from "./Components/Comps/Tables/StudentsTable";
import { Link, Route, Switch } from "react-router-dom";

function App() {
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
