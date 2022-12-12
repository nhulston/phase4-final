import Head from "next/head";
import Navbar from "../../components/Navbar";
import {Wrapper} from "../../components/Wrapper";
import {useState} from "react";
import Field from "../../components/Field";
import {Button} from "../../components/Button";
import Axios from "axios";

export default function refuel_drone() {
  const [drone_id, setDrone_id] = useState("");
  const [drone_tag, setDrone_tag] = useState(-1);
  const [fuel, setFuel] = useState(-1);

  const refuel = () => {
    if (drone_id === ""||drone_tag==-1||fuel==-1) {
      alert("please fill in fields");
      return;
    }
    if (drone_id.length > 40) {
        alert("Drone Id too long");
        return;
    }
    if (fuel < 0) {
        alert("Can not have negative fuel");
        return;
    }
    //gonna add axios later 
  };

  return (
    <div>
      <Head>
        <title>Refuel Drone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <Wrapper>
        <Field label={"Drone_Id"} value={drone_id} onChange={setDrone_id}/>
        <Field label={"Drone_Tag"} value={drone_tag} onChange={setDrone_tag}/>
        <Field label={"Fuel to add"} value={fuel} onChange={setFuel}/>
        <Button onClick={refuel}>Refuel Drone</Button>
      </Wrapper>
    </div>
  );
}