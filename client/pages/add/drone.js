import Head from "next/head";
import Navbar from "../../components/Navbar";
import {Wrapper} from "../../components/Wrapper";
import {useState} from "react";
import Field from "../../components/Field";
import {Button} from "../../components/Button";
import Axios from "axios";

export default function Drone() {
    const [id, setId] = useState("");
    const [tag, setTag] = useState(-1);
    const [fuel, setFuel] = useState(-1);
    const [capacity, setCapacity] = useState(-1);
    const [sales, setSales] = useState(-1);
    const [flownBy, setFlownBy] = useState("");

    const add = () => {
        if (id === "" || tag === -1 || fuel === -1 || capacity === -1 || sales === -1 || flownBy === "") {
            alert("Please fill in all fields");
            return;
        }
        if (id.length > 40) {
            alert("ID is too long");
            return;
        }
        if (fuel < 0) {
            alert("Fuel must be positive");
            return;
        }
        if (capacity < 0) {
            alert("Capacity must be positive");
            return;
        }
        if (sales < 0) {
            alert("Sales must be positive");
            return;
        }
        if (flownBy.length > 40) {
            alert("Flown By is too long");
            return;
        }

        Axios.post("http://localhost:3001/add/drone", {
            id: id,
            tag: tag,
            fuel: fuel,
            capacity: capacity,
            sales: sales,
            flownBy: flownBy
        }).then(() => {
            document.location.href="/";
        });
    };

    return (
        <div>
            <Head>
                <title>Add Ingredient</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar/>
            <Wrapper>
                <Field label={"ID"} value={id} onChange={setId}/>
                <Field label={"Tag"} value={tag} onChange={setTag} int={true}/>
                <Field label={"Fuel"} value={fuel} onChange={setFuel} int={true}/>
                <Field label={"Capacity"} value={capacity} onChange={setCapacity} int={true}/>
                <Field label={"Sales"} value={sales} onChange={setSales} int={true}/>
                <Field label={"Flown By"} value={flownBy} onChange={setFlownBy}/>
                <Button onClick={add}>Add Drone</Button>
            </Wrapper>
        </div>
    )
}
