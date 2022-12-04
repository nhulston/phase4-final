import Head from "next/head";
import Navbar from "../../components/Navbar";
import {Wrapper} from "../../components/Wrapper";
import {useState} from "react";
import Field from "../../components/Field";
import {Button} from "../../components/Button";
import Axios from "axios";

export default function Worker() {
    const [username, setUsername] = useState("");

    const add = () => {
        if (username === "") {
            alert("Please fill in all fields");
            return;
        }
        if (username.length > 40) {
            alert("Username is too long");
            return;
        }

        // Ensure username already exists
        Axios.get("http://localhost:3001/employee/" + username).then(r => {
            if (r.data.length === 0) {
                alert("Username does not exist");
                return;
            }

            Axios.post("http://localhost:3001/add/worker", {
                username: username,
            }).then(() => {
                document.location.href="/";
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
                <Button onClick={add}>Add Worker</Button>
            </Wrapper>
        </div>
    )
}
