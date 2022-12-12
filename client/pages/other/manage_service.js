import Head from "next/head";
import Navbar from "../../components/Navbar";
import {Wrapper} from "../../components/Wrapper";
import {useState} from "react";
import Field from "../../components/Field";
import {Button} from "../../components/Button";
import Axios from "axios";

export default function manage_service() {
  const [username, setUsername] = useState("");
  const [id, setId] = useState("");

  const manage = () => {
    if (username === ""||id=="") {
      alert("please fill in fields");
      return;
    }
    if (username.length > 40) {
        alert("Username is too long");
        return;
    }
    if (id.length > 40) {
        alert("Username is too long");
        return;
    }
    Axios.post("http://localhost:3001/other/manage_service", {
                username: username,
                id: id,
            }).then(() => {
                console.log("success");
                document.location.href="/";
            });
  };

  return (
    <div>
      <Head>
        <title>Manage Service</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <Wrapper>
        <Field label={"Username"} value={username} onChange={setUsername}/>
        <Field label={"Id"} value={id} onChange={setId}/>
        <Button onClick={manage}>Manage Service</Button>
      </Wrapper>
    </div>
  );
}
