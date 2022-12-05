import Head from "next/head";
import Navbar from "../../components/Navbar";
import {Wrapper} from "../../components/Wrapper";
import {useState} from "react";
import Field from "../../components/Field";
import {Button} from "../../components/Button";
import Axios from "axios";

export default function Location() {
    const [label, setLabel] = useState("");
    const [xCoord, setXCoord] = useState(0);
    const [yCoord, setYCoord] = useState(0);
    const [space, setSpace] = useState(-1);

    const add = () => {
        if (label === "" || space === -1) {
            alert("Please fill in all fields");
            return;
        }
        if (label.length > 40) {
            alert("Label is too long");
            return;
        }
        if (space < 0) {
            alert("Space can't be negative");
            return;
        }

        // Check if id is unique
        Axios.post("http://localhost:3001/add/location", {
            label: label,
            xCoord: xCoord,
            yCoord: yCoord,
            space: space
        }).then(() => {
            document.location.href="/";
        });
    };

    return (
        <div>
            <Head>
                <title>Add Location</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar/>
            <Wrapper>
                <Field label={"Label"} value={label} onChange={setLabel}/>
                <Field label={"X Coordinate"} value={xCoord} onChange={setXCoord} int={true}/>
                <Field label={"Y Coordinate"} value={yCoord} onChange={setYCoord} int={true}/>
                <Field label={"Space"} value={space} onChange={setSpace} int={true}/>
                <Button onClick={add}>Add Location</Button>
            </Wrapper>
        </div>
    )
}
