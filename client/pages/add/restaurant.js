import Head from "next/head";
import Navbar from "../../components/Navbar";
import {Wrapper} from "../../components/Wrapper";
import {useState} from "react";
import Field from "../../components/Field";
import {Button} from "../../components/Button";
import Axios from "axios";

export default function Restaurant() {
    const [name, setName] = useState("");
    const [rating, setRating] = useState(-1);
    const [spent, setSpent] = useState(-1);
    const [location, setLocation] = useState("");

    const add = () => {
        if (name === "" || rating === -1 || spent === -1 || location === "") {
            alert("Please fill in all fields");
            return;
        }
        if (name.length > 40) {
            alert("Name is too long");
            return;
        }
        if (rating < 0 || rating > 5) {
            alert("Rating must be between 1-5");
            return;
        }
        if (spent < 0) {
            alert("Spent must be positive");
            return;
        }
        if (location.length > 40) {
            alert("Location is too long");
            return;
        }

        Axios.post("http://localhost:3001/add/restaurant", {
            name: name,
            rating: rating,
            spent: spent,
            location: location
        }).then(() => {
            document.location.href="/";
        });
    };

    return (
        <div>
            <Head>
                <title>Add Restaurant</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar/>
            <Wrapper>
                <Field label={"Name"} value={name} onChange={setName}/>
                <Field label={"Rating"} value={rating} onChange={setRating} int={true}/>
                <Field label={"Spent"} value={spent} onChange={setSpent} int={true}/>
                <Field label={"Location"} value={location} onChange={setLocation}/>
                <Button onClick={add}>Add Restaurant</Button>
            </Wrapper>
        </div>
    )
}
