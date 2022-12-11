import Head from "next/head";
import Navbar from "../../components/Navbar";
import {Wrapper} from "../../components/Wrapper";
import {useState} from "react";
import Field from "../../components/Field";
import {Button} from "../../components/Button";
import Axios from "axios";

export default function remove_ingredient() {
  const [barocde, setBarcode] = useState("");



  const remove = () => {
    if (barocde=="") {
      alert("please fill in fields");
      return;
    }

    if (barocde.length>40) {
        alert("Barcode too long");
        return;
    }
    //gonna add axios later 
  };

  return (
    <div>
      <Head>
        <title>Remove Ingredient</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <Wrapper>
        <Field label={"Barcode"} value={barocde} onChange={setBarcode}/>
        <Button onClick={remove}>Remove Ingredient</Button>
      </Wrapper>
    </div>
  );
}