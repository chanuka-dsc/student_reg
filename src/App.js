import "./App.css";
import "./Css/Theme.css";
import StudentsTable from "./Components/Comps/Tables/StudentsTable";
import AddStudentForm from "./Components/Comps/Forms/AddStudentFrom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddStudentForm />
        <StudentsTable />
      </header>
    </div>
  );
}

export default App;
