import Head from "next/head";
import Navbar from "../../components/Navbar";
import {Wrapper} from "../../components/Wrapper";
import {useEffect, useState} from "react";
import Axios from "axios";
import {Table, TableData, TableHeader} from "../../components/Table";

export default function Services() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/view/service").then(r => {
            setServices(r.data);
        });
    }, []);

    return (
        <div>
            <Head>
                <title>View Services</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar/>
            <Wrapper>
                <Table>
                    <thead>
                        <tr>
                            <TableHeader>ID</TableHeader>
                            <TableHeader>Long Name</TableHeader>
                            <TableHeader>Home Base</TableHeader>
                            <TableHeader>Manager</TableHeader>
                            <TableHeader>Revenue</TableHeader>
                            <TableHeader>Ingredients Carried</TableHeader>
                            <TableHeader>Cost Carried</TableHeader>
                            <TableHeader>Weight Carried</TableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map((service, index) => (
                            <tr key={index}>
                                <TableData>{service.id}</TableData>
                                <TableData>{service.long_name}</TableData>
                                <TableData>{service.home_base}</TableData>
                                <TableData>{service.manager}</TableData>
                                <TableData>{service.revenue}</TableData>
                                <TableData>{service.ingredients_carried}</TableData>
                                <TableData>{service.cost_carried}</TableData>
                                <TableData>{service.weight_carried}</TableData>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Wrapper>
        </div>
    )
}
