import React from "react";
import NewEmployee from "./components/Form/NewEmployee";
import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import EmployeeTable from "./components/Table/EmployeeTable";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<NewEmployee />} />
        <Route exact path="/employees" element={<EmployeeTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
