import Head from "next/head";
import Navbar from "../../components/Navbar";
import {Wrapper} from "../../components/Wrapper";
import {useState} from "react";
import Field from "../../components/Field";
import {Button} from "../../components/Button";
import Axios from "axios";

export default function remove_pilot_role() {
  const [username, setUsername] = useState("");

  const remove = () => {
    if (username === "") {
      alert("please fill in fields");
      return;
    }
    if (username.length > 40) {
        alert("Username is too long");
        return;
    }
    Axios.post("http://localhost:3001/other/remove_pilot_role", {
                username: username,
            }).then(() => {
                console.log("success");
                document.location.href="/";
            }); 
  };

  return (
    <div>
      <Head>
        <title>Remove Pilot Role</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <Wrapper>
        <Field label={"Username"} value={username} onChange={setUsername}/>
        <Button onClick={remove}>Remove Pilot Role</Button>
      </Wrapper>
    </div>
  );
}
