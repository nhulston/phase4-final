import Head from "next/head";
import Navbar from "../../components/Navbar";
import {Wrapper} from "../../components/Wrapper";
import {useEffect, useState} from "react";
import Axios from "axios";
import {Table, TableData, TableHeader} from "../../components/Table";

export default function Pilots() {
    const [pilots, setPilots] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/view/pilot").then(r => {
            setPilots(r.data);
        });
    }, []);

    return (
        <div>
            <Head>
                <title>View Pilots</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar/>
            <Wrapper>
                <Table>
                    <thead>
                        <tr>
                            <TableHeader>Username</TableHeader>
                            <TableHeader>License ID</TableHeader>
                            <TableHeader>Experience</TableHeader>
                            <TableHeader>Num Drones</TableHeader>
                            <TableHeader>Num Locations</TableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        {pilots.map((pilot, index) => (
                            <tr key={index}>
                                <TableData>{pilot.username}</TableData>
                                <TableData>{pilot.licenseID}</TableData>
                                <TableData>{pilot.experience}</TableData>
                                <TableData>{pilot.num_drones}</TableData>
                                <TableData>{pilot.num_locations}</TableData>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Wrapper>
        </div>
    )
}
