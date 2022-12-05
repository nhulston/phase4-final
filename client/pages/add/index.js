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
                <RedirectButton href={'/add/pilot'}>Pilot</RedirectButton>
                <RedirectButton href={'/add/worker'}>Worker</RedirectButton>
                <RedirectButton href={'/add/ingredient'}>Ingredient</RedirectButton>
                <RedirectButton href={'/add/drone'}>Drone</RedirectButton>
                <RedirectButton href={'/add/restaurant'}>Restaurant</RedirectButton>
                <RedirectButton href={'/add/delivery_service'}>Delivery Service</RedirectButton>
                <RedirectButton>Location</RedirectButton>
            </Wrapper>
        </div>
    )
}
