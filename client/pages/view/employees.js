import Head from "next/head";
import Navbar from "../../components/Navbar";
import {Wrapper} from "../../components/Wrapper";
import {useEffect, useState} from "react";
import Axios from "axios";
import {Table, TableData, TableHeader} from "../../components/Table";

export default function Employees() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/view/employee").then(r => {
            setEmployees(r.data);
        });
    }, []);

    return (
        <div>
            <Head>
                <title>View Employees</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar/>
            <Wrapper>
                <Table>
                    <thead>
                        <tr>
                            <TableHeader>Username</TableHeader>
                            <TableHeader>Tax ID</TableHeader>
                            <TableHeader>Salary</TableHeader>
                            <TableHeader>Hired</TableHeader>
                            <TableHeader>Employee Experience</TableHeader>
                            <TableHeader>License ID</TableHeader>
                            <TableHeader>Piloting Experience</TableHeader>
                            <TableHeader>Manager Status</TableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee, index) => (
                            <tr key={index}>
                                <TableData>{employee.username}</TableData>
                                <TableData>{employee.taxID}</TableData>
                                <TableData>{employee.salary}</TableData>
                                <TableData>{employee.hired}</TableData>
                                <TableData>{employee.employee_experience}</TableData>
                                <TableData>{employee.licenseID}</TableData>
                                <TableData>{employee.piloting_experience}</TableData>
                                <TableData>{employee.manager_status}</TableData>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Wrapper>
        </div>
    )
}
