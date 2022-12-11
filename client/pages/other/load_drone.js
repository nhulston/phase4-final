import Head from "next/head";
import Navbar from "../../components/Navbar";
import {Wrapper} from "../../components/Wrapper";
import {useState} from "react";
import Field from "../../components/Field";
import {Button} from "../../components/Button";
import Axios from "axios";

export default function load_package() {
  const [drone_id, setDrone_id] = useState("");
  const [drone_tag, setDrone_tag] = useState(-1);
  const [barocde, setBarcode] = useState("");
  const [packages, setPackages] = useState(-1);
  const [price, setPrice] = useState(-1);


  const load = () => {
    if (drone_id === ""||drone_tag==-1||packages==-1||price==-1||barocde=="") {
      alert("please fill in fields");
      return;
    }
    if (drone_id.length > 40) {
        alert("Drone Id too long");
        return;
    }
    if (barocde.length > 40) {
        alert("Barcode too long");
        return;
    }
    if (packages<0) {
        alert("Packages cannot be negative");
        return;
    }
    if (price<0) {
        alert("Price cannot be negative");
        return;
    }
    //gonna add axios later 
  };

  return (
    <div>
      <Head>
        <title>Load Drone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <Wrapper>
        <Field label={"Drone_Id"} value={drone_id} onChange={setDrone_id}/>
        <Field label={"Drone_Tag"} value={drone_tag} onChange={setDrone_tag}/>
        <Field label={"Barcode"} value={barocde} onChange={setBarcode}/>
        <Field label={"Packages to add"} value={packages} onChange={setPackages}/>
        <Field label={"Price"} value={price} onChange={setPrice}/>
        <Button onClick={load}>Load Drone</Button>
      </Wrapper>
    </div>
  );
}