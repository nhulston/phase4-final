import Head from "next/head";
import Navbar from "../../components/Navbar";
import {Wrapper} from "../../components/Wrapper";
import {useState} from "react";
import Field from "../../components/Field";
import {Button} from "../../components/Button";
import Axios from "axios";

export default function Employee() {
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [birthday, setBirthday] = useState("");
    const [taxId, setTaxId] = useState("");
    const [hireDate, setHireDate] = useState("");
    const [experience, setExperience] = useState(-1);
    const [salary, setSalary] = useState(-1);

    const add = () => {
        if (username === "" || firstName === "" || lastName === "" || address === "" || birthday === "" || taxId === "" || hireDate === "" || experience === -1 || salary === -1) {
            alert("Please fill in all fields");
            return;
        }
        if (username.length > 40) {
            alert("Username is too long");
            return;
        }
        if (firstName.length > 100) {
            alert("First name is too long");
            return;
        }
        if (lastName.length > 100) {
            alert("Last name is too long");
            return;
        }
        if (address.length > 500) {
            alert("Address is too long");
            return;
        }
        if (taxId.length > 40) {
            alert("Tax ID is too long");
            return;
        }
        if (experience < 0) {
            alert("Experience must be positive");
            return;
        }
        if (salary < 0) {
            alert("Salary must be positive");
            return;
        }

        // Check if username & tax id exists
        Axios.get("http://localhost:3001/username/" + username).then(r => {
            if (r.data.length > 0) {
                alert("Username already exists");
                return;
            }

            Axios.get("http://localhost:3001/employee/" + taxId).then(r2 => {
                if (r2.data.length > 0) {
                    alert("Tax ID already exists");
                    return;
                }

                Axios.post("http://localhost:3001/add/employee", {
                    username: username,
                    firstName: firstName,
                    lastName: lastName,
                    address: address,
                    birthday: birthday,
                    taxId: taxId,
                    hireDate: hireDate,
                    experience: experience,
                    salary: salary,
                }).then(() => {
                    console.log("success");
                    document.location.href="/";
                });
            });
        });
    };

    return (
        <div>
            <Head>
                <title>Add Employee</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar/>
            <Wrapper>
                <Field label={"Username"} value={username} onChange={setUsername}/>
                <Field label={"First Name"} value={firstName} onChange={setFirstName}/>
                <Field label={"Last Name"} value={lastName} onChange={setLastName}/>
                <Field label={"Address"} value={address} onChange={setAddress}/>
                <Field label={"Birthday"} value={birthday} onChange={setBirthday} date={true}/>
                <Field label={"Tax ID"} value={taxId} onChange={setTaxId}/>
                <Field label={"Hire Date"} value={hireDate} onChange={setHireDate} date={true}/>
                <Field label={"Experience"} value={experience} onChange={setExperience} int={true}/>
                <Field label={"Salary"} value={salary} onChange={setSalary} int={true}/>
                <Button onClick={add}>Add Employee</Button>
            </Wrapper>
        </div>
    )
}
