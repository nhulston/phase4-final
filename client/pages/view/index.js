import Head from "next/head";
import Navbar from "../../components/Navbar";
import {Wrapper} from "../../components/Wrapper";
import {RedirectButton} from "../../components/RedirectButton";

export default function Index() {
    return (
        <div>
            <Head>
                <title>View</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar/>
            <Wrapper>
                <RedirectButton href={'/view/owners'}>View Owners</RedirectButton>
                <RedirectButton href={'/view/employees'}>View Employees</RedirectButton>
                <RedirectButton href={'/view/pilots'}>View Pilots</RedirectButton>
                <RedirectButton href={'/view/locations'}>View Locations</RedirectButton>
                <RedirectButton href={'/view/ingredients'}>View Ingredients</RedirectButton>
                <RedirectButton href={'/view/services'}>View Services</RedirectButton>
            </Wrapper>
        </div>
    )
}
