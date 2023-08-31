import { useState } from "react";
import Header from "../layout/Header";
import NewEmployee from "../components/Form/NewEmployee";
import EmployeeTable from "../components/Table/EmployeeTable";
import { Button } from "@mui/material";


export default function Home () {

    // Stock employee created
    const [employees, setEmployees] = useState([]);

    // Toggle between table and form
    const [isTableShow, setIsTableShow] = useState(false);

    console.log(employees);


    return (
        <>
            <Header />
            <main className="home">
            <Button onClick={() => setIsTableShow(!isTableShow)} variant="contained" color="tertiary">
                {isTableShow ? "Home" : "View current employees"}
            </Button>
            {
                !isTableShow ? 
                <NewEmployee setEmployees={setEmployees} /> : <EmployeeTable tableData={employees} />
            }
            </main>
           
        </>
    )

}