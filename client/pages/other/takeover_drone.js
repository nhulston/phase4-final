import Head from "next/head";
import Navbar from "../../components/Navbar";
import {Wrapper} from "../../components/Wrapper";
import {useState} from "react";
import Field from "../../components/Field";
import {Button} from "../../components/Button";
import Axios from "axios";

export default function takeover_drone() {
  const [username, setUsername] = useState("");
  const [drone_id, setDrone_id] = useState("");
  const [drone_tag, setDrone_tag] = useState(-1);
  

  const take = () => {
    if (drone_id === ""||username==""||swarm_leader_drone_tag==-1) {
      alert("please fill in fields");
      return;
    }
    if (drone_id.length > 40) {
        alert("Drone Id too long");
        return;
    }
    if (username.length > 40) {
        alert("Username is too long");
        return;
    }
    Axios.post("http://localhost:3001/other/takeover_drone", {
                username: username,
                drone_id: drone_id,
                drone_tag: drone_tag,
            }).then(() => {
                console.log("success");
                document.location.href="/";
            }); 
  };

  return (
    <div>
      <Head>
        <title>Takeover Drone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <Wrapper>
        <Field label={"Username"} value={username} onChange={setUsername}/>
        <Field label={"Drone_Id"} value={drone_id} onChange={setDrone_id}/>
        <Field label={"Drone_Tag"} value={drone_tag} onChange={setDrone_tag}/>
       
        <Button onClick={take}>Takeover Drone</Button>
      </Wrapper>
    </div>
  );
}
