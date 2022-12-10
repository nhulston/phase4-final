import Head from "next/head";
import Navbar from "../../components/Navbar";
import {Wrapper} from "../../components/Wrapper";
import {useEffect, useState} from "react";
import Axios from "axios";
import {Table, TableData, TableHeader} from "../../components/Table";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [editing, setEditing] = useState([]);

    const [oldUsername, setOldUsername] = useState("");
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");

    useEffect(() => {
        Axios.get("http://localhost:3001/edit/users").then(r => {
            setUsers(r.data);
            for (const user in r.data) {
                setEditing(prevState => [...prevState, false]);
            }
        });
    }, []);

    // Map users with return statement
    const rows = users.map((user, index) => {
        if (editing[index]) {
            return (
                <tr key={index}>
                    <TableData>
                        <input type="text" defaultValue={username} onChange={(event) => setUsername(event.target.value)}/>
                    </TableData>
                    <TableData>
                        <input type="text" defaultValue={firstName} onChange={(event) => setFirstName(event.target.value)}/>
                    </TableData>
                    <TableData>
                        <input type="text" defaultValue={lastName} onChange={(event) => setLastName(event.target.value)}/>
                    </TableData>
                    <TableData>
                        <input type="text" defaultValue={address} onChange={(event) => setAddress(event.target.value)}/>
                    </TableData>
                    <TableData>
                        <button onClick={() => {
                            console.log('Updating user ' + oldUsername);
                            Axios.post('http://localhost:3001/update/users', {
                                oldUserName: oldUsername,
                                newUserName: username,
                                firstName: firstName,
                                lastName: lastName,
                                address: address,
                            }).then(r => {
                                if (r.data.sql == null) {
                                    alert("User edited successfully");
                                    window.location.reload();
                                } else {
                                    alert("Error editing user: " + r.data.sqlMessage);
                                }
                            });
                            setEditing(prevState => {
                                const newState = [...prevState];
                                newState[index] = false;
                                return newState;
                            });
                        }}>Save</button>
                        <button onClick={() => {
                            setEditing(prevState => {
                                const newState = [...prevState];
                                newState[index] = false;
                                return newState;
                            });
                        }}>
                            Cancel
                        </button>
                    </TableData>
                </tr>
            );
        }
        return (
            <tr key={index}>
                <TableData>{user.username}</TableData>
                <TableData>{user.first_name}</TableData>
                <TableData>{user.last_name}</TableData>
                <TableData>{user.address}</TableData>
                <TableData>
                    <button onClick={
                        () => {
                            setOldUsername(user.username);
                            setEditing(prevState => {
                                const newState = [...prevState];
                                newState[index] = true;
                                return newState;
                            });
                            setUsername(user.username);
                            setFirstName(user.first_name);
                            setLastName(user.last_name);
                            setAddress(user.address);
                        }
                    }>Edit</button>
                    <button onClick={
                        () => {
                            Axios.delete(`http://localhost:3001/delete/users/${user.username}`).then(r => {
                                if (r.data.sql == null) {
                                    alert("User deleted successfully");
                                    window.location.reload();
                                } else {
                                    alert("Error deleting user: " + r.data.sqlMessage);
                                }
                            });
                        }
                    }>Delete</button>
                </TableData>
            </tr>
        );
    });

    return (
        <div>
            <Head>
                <title>Edit Users</title>
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
                        <TableHeader>Actions</TableHeader>
                    </tr>
                    </thead>
                    <tbody>
                    {rows}
                    </tbody>
                </Table>
            </Wrapper>
        </div>
    )
}
