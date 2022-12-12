import Head from "next/head";
import Navbar from "../../components/Navbar";
import {Wrapper} from "../../components/Wrapper";
import {useState} from "react";
import Field from "../../components/Field";
import {Button} from "../../components/Button";
import Axios from "axios";

export default function remove_ingredient() {
  const [barcode, setBarcode] = useState("");



  const remove = () => {
    if (barcode=="") {
      alert("please fill in fields");
      return;
    }

    if (barcode.length>40) {
        alert("Barcode too long");
        return;
    }
    Axios.post("http://localhost:3001/other/remove_ingredient", {
                barcode: barcode,
            }).then(() => {
                console.log("success");
                document.location.href="/";
            });
  };

  return (
    <div>
      <Head>
        <title>Remove Ingredient</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <Wrapper>
        <Field label={"Barcode"} value={barcode} onChange={setBarcode}/>
        <Button onClick={remove}>Remove Ingredient</Button>
      </Wrapper>
    </div>
  );
}
