import Head from "next/head";
import Navbar from "../../components/Navbar";
import {Wrapper} from "../../components/Wrapper";
import {useState} from "react";
import Field from "../../components/Field";
import {Button} from "../../components/Button";
import Axios from "axios";

export default function Ingredient() {
    const [barcode, setBarcode] = useState("");
    const [name, setName] = useState("");
    const [weight, setWeight] = useState(-1);

    const add = () => {
        if (barcode === "" || name === "" || weight === -1) {
            alert("Please fill in all fields");
            return;
        }
        if (barcode.length > 40) {
            alert("Barcode is too long");
            return;
        }
        if (name.length > 100) {
            alert("Name is too long");
            return;
        }
        if (weight < 0) {
            alert("Weight must be positive");
            return;
        }

        // Ensure barcode unique
        Axios.get("http://localhost:3001/ingredient/" + barcode).then(r => {
            if (r.data.length > 0) {
                alert("Barcode already exists");
                return;
            }

            Axios.post("http://localhost:3001/add/ingredient", {
                barcode: barcode,
                name: name,
                weight: weight
            }).then(() => {
                document.location.href="/";
            });
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
                <Field label={"Barcode"} value={barcode} onChange={setBarcode}/>
                <Field label={"Name"} value={name} onChange={setName}/>
                <Field label={"Weight"} value={weight} onChange={setWeight} int={true}/>
                <Button onClick={add}>Add Ingredient</Button>
            </Wrapper>
        </div>
    )
}
