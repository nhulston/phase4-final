import Head from "next/head";
import Navbar from "../../components/Navbar";
import {Wrapper} from "../../components/Wrapper";
import {useState} from "react";
import Field from "../../components/Field";
import {Button} from "../../components/Button";
import Axios from "axios";

export default function Pilot() {
    const [username, setUsername] = useState("");
    const [licenseId, setLicenseId] = useState("");
    const [experience, setExperience] = useState(-1);

    const add = () => {
        if (username === "" || licenseId === "" || experience === -1) {
            alert("Please fill in all fields");
            return;
        }
        if (username.length > 40) {
            alert("Username is too long");
            return;
        }
        if (licenseId.length > 40) {
            alert("First name is too long");
            return;
        }
        if (experience < 0) {
            alert("Experience must be positive");
            return;
        }

        // Ensure username exists and check if licenseId exists
        Axios.get("http://localhost:3001/username/" + username).then(r => {
            if (r.data.length === 0) {
                alert("Pilot username does not exist");
                return;
            }

            Axios.get("http://localhost:3001/pilot/" + licenseId).then(r2 => {
                if (r2.data.length > 0) {
                    alert("License ID already exists");
                    return;
                }

                Axios.post("http://localhost:3001/add/pilot", {
                    username: username,
                    licenseId: licenseId,
                    experience: experience
                }).then(() => {
                    document.location.href="/";
                });
            });
        });
    };

    return (
        <div>
            <Head>
                <title>Add Pilot</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar/>
            <Wrapper>
                <Field label={"Username"} value={username} onChange={setUsername}/>
                <Field label={"License ID"} value={licenseId} onChange={setLicenseId}/>
                <Field label={"Experience"} value={experience} onChange={setExperience} int={true}/>
                <Button onClick={add}>Add Pilot</Button>
            </Wrapper>
        </div>
    )
}
