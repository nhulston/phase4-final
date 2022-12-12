import Head from "next/head";
import Navbar from "../../components/Navbar";
import {Wrapper} from "../../components/Wrapper";
import {useState} from "react";
import Field from "../../components/Field";
import {Button} from "../../components/Button";
import Axios from "axios";

export default function join_swarm() {
  const [drone_id, setDrone_id] = useState("");
  const [drone_tag, setDrone_tag] = useState(-1);
  const [swarm_leader_drone_tag, setSwarm_leader_drone_tag] = useState(-1);

  const join = () => {
    if (drone_id === ""||drone_tag==-1||swarm_leader_drone_tag==-1) {
      alert("please fill in fields");
      return;
    }
    if (drone_id.length > 40) {
        alert("Drone Id too long");
        return;
    }
    Axios.post("http://localhost:3001/other/join_swarm", {
                drone_id: drone_id,
                drone_tag: drone_tag,
                swarm_leader_drone_tag: swarm_leader_drone_tag,
            }).then(() => {
                console.log("success");
                document.location.href="/";
            }); 
  };

  return (
    <div>
      <Head>
        <title>Join Swarm</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <Wrapper>
        <Field label={"Drone_Id"} value={drone_id} onChange={setDrone_id}/>
        <Field label={"Drone_Tag"} value={drone_tag} onChange={setDrone_tag}/>
        <Field label={"Swarm Leader Done Tag"} value={swarm_leader_drone_tag} onChange={setSwarm_leader_drone_tag}/>
        <Button onClick={join}>Join Swarm</Button>
      </Wrapper>
    </div>
  );
}
