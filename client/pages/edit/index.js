import Head from "next/head";
import Navbar from "../../components/Navbar";
import {Wrapper} from "../../components/Wrapper";
import {RedirectButton} from "../../components/RedirectButton";

export default function Index() {
    return (
        <div>
            <Head>
                <title>Edit</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar/>
            <Wrapper>
                <RedirectButton href={'/edit/users'}>Edit Users</RedirectButton>
            </Wrapper>
        </div>
    )
}
