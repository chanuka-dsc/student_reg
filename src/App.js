import "./App.css";
import StudentRegister from "./Components/Comps/Forms/StudentRegister";
import SubmitForm from "./Components/Misc/SumbitForm";
import "./Css/Theme.css";
import StudentsTable from "./Components/Comps/Tables/StudentsTable";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StudentsTable />
        <StudentRegister />
        {/* <SubmitForm /> */}
      </header>
    </div>
  );
}

export default App;
