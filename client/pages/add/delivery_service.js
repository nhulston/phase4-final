import Head from "next/head";
import Navbar from "../../components/Navbar";
import {Wrapper} from "../../components/Wrapper";
import {useState} from "react";
import Field from "../../components/Field";
import {Button} from "../../components/Button";
import Axios from "axios";

export default function DeliveryService() {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [homeBase, setHomeBase] = useState("");
    const [manager, setManager] = useState("");

    const add = () => {
        if (id === "" || name === "" || homeBase === "" || manager === "") {
            alert("Please fill in all fields");
            return;
        }
        if (id.length > 40) {
            alert("ID is too long");
            return;
        }
        if (name.length > 100) {
            alert("Name is too long");
            return;
        }
        if (homeBase.length > 40) {
            alert("Home base is too long");
            return;
        }
        if (manager.length > 40) {
            alert("Manager is too long");
            return;
        }

        // Check if id is unique
        Axios.get("http://localhost:3001/delivery_service/" + id).then(r => {
            if (r.data.length > 0) {
                alert("ID already exists");
                return;
            }

            Axios.post("http://localhost:3001/add/delivery_service", {
                id: id,
                name: name,
                homeBase: homeBase,
                manager: manager
            }).then(() => {
                document.location.href="/";
            });
        });
    };

    return (
        <div>
            <Head>
                <title>Add Delivery Service</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar/>
            <Wrapper>
                <Field label={"ID"} value={id} onChange={setId}/>
                <Field label={"Name"} value={name} onChange={setName}/>
                <Field label={"Home Base"} value={homeBase} onChange={setHomeBase}/>
                <Field label={"Manager"} value={manager} onChange={setManager}/>
                <Button onClick={add}>Add Delivery Service</Button>
            </Wrapper>
        </div>
    )
}
