import Head from "next/head";
import Navbar from "../../components/Navbar";
import {Wrapper} from "../../components/Wrapper";
import {useEffect, useState} from "react";
import Axios from "axios";
import {Table, TableData, TableHeader} from "../../components/Table";

export default function Owners() {
    const [owners, setOwners] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/view/owner").then(r => {
            setOwners(r.data);
        });
    }, []);

    return (
        <div>
            <Head>
                <title>View Owners</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar/>
            <Wrapper>
                <Table>
                    <thead>
                        <tr>
                            <TableHeader>Username</TableHeader>
                            <TableHeader>First Name</TableHeader>
                            <TableHeader>Last Name</TableHeader>
                            <TableHeader>Address</TableHeader>
                            <TableHeader>Num Restaurants</TableHeader>
                            <TableHeader>Num Places</TableHeader>
                            <TableHeader>Highs</TableHeader>
                            <TableHeader>Lows</TableHeader>
                            <TableHeader>Debt</TableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        {owners.map((owner, index) => (
                            <tr key={index}>
                                <TableData>{owner.username}</TableData>
                                <TableData>{owner.first_name}</TableData>
                                <TableData>{owner.last_name}</TableData>
                                <TableData>{owner.address}</TableData>
                                <TableData>{owner.num_restaurants}</TableData>
                                <TableData>{owner.num_places}</TableData>
                                <TableData>{owner.highs}</TableData>
                                <TableData>{owner.lows}</TableData>
                                <TableData>{owner.debt}</TableData>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Wrapper>
        </div>
    )
}
