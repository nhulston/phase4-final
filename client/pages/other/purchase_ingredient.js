import Head from "next/head";
import Navbar from "../../components/Navbar";
import {Wrapper} from "../../components/Wrapper";
import {useState} from "react";
import Field from "../../components/Field";
import {Button} from "../../components/Button";
import Axios from "axios";

export default function purchase_ingredient() {
  const [name, setName] = useState("");
  const [drone_id, setDrone_id] = useState("");
  const [drone_tag, setDrone_tag] = useState(-1);
  const [barcode, setBarcode] = useState("");
  const [quantity, setQuantity] = useState(-1);


  const purchase = () => {
    if (drone_id === ""||drone_tag==-1||quantity==-1||name==""||barcode=="") {
      alert("please fill in fields");
      return;
    }
    if (drone_id.length > 40) {
        alert("Drone Id too long");
        return;
    }
    if (name.length > 40) {
        alert("Restaurant name too long");
        return;
    }
    if (quantity<0) {
        alert("Quantity can not be negative");
        return;
    }
    if (barcode.length>40) {
        alert("Barcode too long");
        return;
    }
    Axios.post("http://localhost:3001/other/purchase_ingredient", {
                name: name,
                drone_id: drone_id,
                drone_tag: drone_tag,
                barcode: barcode,
                quantity: quantity,
            }).then(() => {
                console.log("success");
                document.location.href="/";
            });
  };

  return (
    <div>
      <Head>
        <title>Purchase Ingredient</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <Wrapper>
        <Field label={"Restaurant Name"} value={name} onChange={setName}/>
        <Field label={"Drone_Id"} value={drone_id} onChange={setDrone_id}/>
        <Field label={"Drone_Tag"} value={drone_tag} onChange={setDrone_tag}/>
        <Field label={"Barcode"} value={barcode} onChange={setBarcode}/>
        <Field label={"Quantity"} value={quantity} onChange={setQuantity}/>
        <Button onClick={purchase}>Purchase Ingredient</Button>
      </Wrapper>
    </div>
  );
}
