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
                <RedirectButton href={'/other/start_funding'}>Start Funding</RedirectButton>
                <RedirectButton href={'/other/hire_employee'}>Hire Employee</RedirectButton>
                <RedirectButton href={'/other/fire_employee'}>Fire Employee</RedirectButton>
                <RedirectButton href={'/other/manage_service'}>Manage Service</RedirectButton>
                <RedirectButton href={'/other/takeover_drone'}>Takeover Drone</RedirectButton>
                <RedirectButton href={'/other/join_swarm'}>Join Swarm</RedirectButton>
                <RedirectButton href={'/other/leave_swarm'}>Lead Swarm</RedirectButton>
                <RedirectButton href={'/other/load_drone'}>Load Drone</RedirectButton>
                <RedirectButton href={'/other/refuel_drone'}>Refuel Drone</RedirectButton>
                <RedirectButton href={'/other/fly_drone'}>Fly Drone</RedirectButton>
                <RedirectButton href={'/other/purchase_ingredient'}>Purchase Ingredient</RedirectButton>
                <RedirectButton href={'/other/remove_ingredient'}>Remove Ingredient</RedirectButton>
                <RedirectButton href={'/other/remove_drone'}>Remove Drone</RedirectButton>
                <RedirectButton href={'/other/remove_pilot_role'}>Remove Pilot Role</RedirectButton>
            </Wrapper>


        </div>
    )
}
