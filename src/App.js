import React from "react";
import SearchBar from "./components/SearchBar";
import EmployeeTable from "./components/EmployeeTable"
import API from "./utils/API"



function App() {
  return (
    <>
    
    <h1 >Employee Diroctory</h1>
    <div>
        <SearchBar />
        <EmployeeTable />
        
    </div>
    
    </>
  );
}

export default App;
