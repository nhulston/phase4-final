import Head from "next/head";
import Navbar from "../../components/Navbar";
import {Wrapper} from "../../components/Wrapper";
import {RedirectButton} from "../../components/RedirectButton";

export default function Index() {
    return (
        <div>
            <Head>
                <title>Other Procedures</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar/>
            <Wrapper>
                <RedirectButton href={'/other/'}>Start Funding</RedirectButton>
                <RedirectButton href={'/other/'}>Hire Employee</RedirectButton>
                <RedirectButton href={'/other/'}>Fire Employee</RedirectButton>
                <RedirectButton href={'/other/'}>Manage Service</RedirectButton>
                <RedirectButton href={'/other/'}>Takeover Drone</RedirectButton>
                <RedirectButton href={'/other/'}>Join Swarm</RedirectButton>
                <RedirectButton href={'/other/'}>Lead Swarm</RedirectButton>
                <RedirectButton href={'/other/'}>Load Drone</RedirectButton>
                <RedirectButton href={'/other/'}>Refuel Drone</RedirectButton>
                <RedirectButton href={'/other/'}>Fuel Required</RedirectButton>
                <RedirectButton href={'/other/'}>Fly Drone</RedirectButton>
                <RedirectButton href={'/other/'}>Purchase Ingredient</RedirectButton>
                <RedirectButton href={'/other/'}>Remove Ingredient</RedirectButton>
                <RedirectButton href={'/other/'}>Remove Drone</RedirectButton>
                <RedirectButton href={'/other/'}>Remove Pilot Role</RedirectButton>
            </Wrapper>
        </div>
    )
}
