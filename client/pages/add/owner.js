import Head from "next/head";
import Navbar from "../../components/Navbar";
import {Wrapper} from "../../components/Wrapper";
import {useState} from "react";
import Field from "../../components/Field";
import {Button} from "../../components/Button";
import Axios from "axios";

export default function Owner() {
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [birthday, setBirthday] = useState("");

    const add = () => {
        if (username === "" || firstName === "" || lastName === "" || address === "" || birthday === "") {
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

        // Check if username exists
        Axios.get("http://localhost:3001/username/" + username).then(r => {
            if (r.data.length > 0) {
                alert("Username already exists");
                return;
            }

            Axios.post("http://localhost:3001/add/owner", {
                username: username,
                firstName: firstName,
                lastName: lastName,
                address: address,
                birthday: birthday,
            }).then(() => {
                console.log("success");
                document.location.href="/";
            });
        });
    };

    return (
        <div>
            <Head>
                <title>Add Owner</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar/>
            <Wrapper>
                <Field label={"Username"} value={username} onChange={setUsername}/>
                <Field label={"First Name"} value={firstName} onChange={setFirstName}/>
                <Field label={"Last Name"} value={lastName} onChange={setLastName}/>
                <Field label={"Address"} value={address} onChange={setAddress}/>
                <Field label={"Birthday"} value={birthday} onChange={setBirthday} date={true}/>
                <Button onClick={add}>Add Owner</Button>
            </Wrapper>
        </div>
    )
}
