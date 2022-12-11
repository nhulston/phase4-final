import Head from "next/head";
import Navbar from "../../components/Navbar";
import {Wrapper} from "../../components/Wrapper";
import {useState} from "react";
import Field from "../../components/Field";
import {Button} from "../../components/Button";
import Axios from "axios";

export default function remove_drone() {
  const [drone_id, setDrone_id] = useState("");
  const [swarm_tag, setSwarm_tag] = useState(-1);

  const remove = () => {
    if (drone_id === ""||swarm_tag==-1) {
      alert("please fill in fields");
      return;
    }
    if (drone_id.length > 40) {
        alert("Drone Id too long");
        return;
    }
    //gonna add axios later 
  };

  return (
    <div>
      <Head>
        <title>Remove Drone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <Wrapper>
        <Field label={"Drone_Id"} value={drone_id} onChange={setDrone_id}/>
        <Field label={"Swarm_Tag"} value={swarm_tag} onChange={setSwarm_tag}/>
        <Button onClick={remove}>Remove Drone</Button>
      </Wrapper>
    </div>
  );
}