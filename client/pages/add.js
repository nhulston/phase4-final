import Head from "next/head";
import Navbar from "../components/Navbar";
import {Wrapper} from "../components/Wrapper";
import {Button} from "../components/Button";

export default function Add() {
    return (
        <div>
            <Head>
                <title>Add</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar/>
            <Wrapper>
                <Button>Owner</Button>
                <Button>Employee</Button>
                <Button>Pilot</Button>
                <Button>Worker</Button>
                <Button>Ingredient</Button>
                <Button>Drone</Button>
                <Button>Restaurant</Button>
                <Button>Delivery Service</Button>
                <Button>Location</Button>
            </Wrapper>
        </div>
    )
}
