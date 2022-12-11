import Head from "next/head";
import Navbar from "../../components/Navbar";
import {Wrapper} from "../../components/Wrapper";
import {useState} from "react";
import Field from "../../components/Field";
import {Button} from "../../components/Button";
import Axios from "axios";

export default function start_funding() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");

  const fund = () => {
    if (username === ""||name=="") {
      alert("please fill in fields");
      return;
    }
    if (username.length > 40) {
        alert("Username is too long");
        return;
    }
    if (name.length > 40) {
        alert("Restaurant name is too long");
        return;
    }
    //gonna add axios later 
  };

  return (
    <div>
      <Head>
        <title>Start Funding</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <Wrapper>
        <Field label={"Owner Username"} value={username} onChange={setUsername}/>
        <Field label={"Restaurant Name"} value={name} onChange={setName}/>
        <Button onClick={fund}>Start Funding</Button>
      </Wrapper>
    </div>
  );
}

