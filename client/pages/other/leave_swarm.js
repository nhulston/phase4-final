import Head from "next/head";
import Navbar from "../../components/Navbar";
import {Wrapper} from "../../components/Wrapper";
import {useState} from "react";
import Field from "../../components/Field";
import {Button} from "../../components/Button";
import Axios from "axios";

export default function leave_swarm() {
  const [drone_id, setDrone_id] = useState("");
  const [swarm_tag, setSwarm_tag] = useState(-1);

  const leave = () => {
    if (drone_id === ""||swarm_tag==-1) {
      alert("please fill in fields");
      return;
    }
    if (drone_id.length > 40) {
        alert("Drone Id too long");
        return;
    }
    Axios.post("http://localhost:3001/other/leave_swarm", {
                drone_id: drone_id,
                swarm_tag: swarm_tag,
            }).then(() => {
                console.log("success");
                document.location.href="/";
            });  
  };

  return (
    <div>
      <Head>
        <title>Leave Swarm</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <Wrapper>
        <Field label={"Drone_Id"} value={drone_id} onChange={setDrone_id}/>
        <Field label={"Swarm_Tag"} value={swarm_tag} onChange={setSwarm_tag}/>
        <Button onClick={leave}>Leave Swarm</Button>
      </Wrapper>
    </div>
  );
}
