import Head from "next/head";
import Navbar from "../../components/Navbar";
import {Wrapper} from "../../components/Wrapper";
import {useEffect, useState} from "react";
import Axios from "axios";
import {Table, TableData, TableHeader} from "../../components/Table";

export default function Locations() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/view/location").then(r => {
            setLocations(r.data);
        });
    }, []);

    return (
        <div>
            <Head>
                <title>View Locations</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar/>
            <Wrapper>
                <Table>
                    <thead>
                        <tr>
                            <TableHeader>Label</TableHeader>
                            <TableHeader>X Coord</TableHeader>
                            <TableHeader>Y Coord</TableHeader>
                            <TableHeader>Num Restaurants</TableHeader>
                            <TableHeader>Num Delivery Services</TableHeader>
                            <TableHeader>Num Drones</TableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        {locations.map((location, index) => (
                            <tr key={index}>
                                <TableData>{location.label}</TableData>
                                <TableData>{location.x_coord}</TableData>
                                <TableData>{location.y_coord}</TableData>
                                <TableData>{location.num_restaurants}</TableData>
                                <TableData>{location.num_delivery_services}</TableData>
                                <TableData>{location.num_drones}</TableData>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Wrapper>
        </div>
    )
}
