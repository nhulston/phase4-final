import Head from "next/head";
import Navbar from "../../components/Navbar";
import {Wrapper} from "../../components/Wrapper";
import {useEffect, useState} from "react";
import Axios from "axios";
import {Table, TableData, TableHeader} from "../../components/Table";

export default function Ingredients() {
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/view/ingredient").then(r => {
            setIngredients(r.data);
        });
    }, []);

    return (
        <div>
            <Head>
                <title>View Ingredients</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar/>
            <Wrapper>
                <Table>
                    <thead>
                        <tr>
                            <TableHeader>Ingredient Name</TableHeader>
                            <TableHeader>Location</TableHeader>
                            <TableHeader>Amount Available</TableHeader>
                            <TableHeader>Low Price</TableHeader>
                            <TableHeader>High Price</TableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        {ingredients.map((ingredient, index) => (
                            <tr key={index}>
                                <TableData>{ingredient.ingredient_name}</TableData>
                                <TableData>{ingredient.location}</TableData>
                                <TableData>{ingredient.amount_available}</TableData>
                                <TableData>{ingredient.low_price}</TableData>
                                <TableData>{ingredient.high_price}</TableData>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Wrapper>
        </div>
    )
}
