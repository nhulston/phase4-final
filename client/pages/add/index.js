import Head from "next/head";
import Navbar from "../../components/Navbar";
import {Wrapper} from "../../components/Wrapper";
import {RedirectButton} from "../../components/RedirectButton";

export default function Index() {
    return (
        <div>
            <Head>
                <title>Add</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar/>
            <Wrapper>
                <RedirectButton href={'/add/owner'}>Owner</RedirectButton>
                <RedirectButton href={'/add/employee'}>Employee</RedirectButton>
                <RedirectButton>Pilot</RedirectButton>
                <RedirectButton>Worker</RedirectButton>
                <RedirectButton>Ingredient</RedirectButton>
                <RedirectButton>Drone</RedirectButton>
                <RedirectButton>Restaurant</RedirectButton>
                <RedirectButton>Delivery Service</RedirectButton>
                <RedirectButton>Location</RedirectButton>
            </Wrapper>
        </div>
    )
}
