import Head from "next/head";
import Navbar from "../../components/Navbar";
import {Wrapper} from "../../components/Wrapper";
import {useState} from "react";
import Field from "../../components/Field";
import {Button} from "../../components/Button";
import Axios from "axios";

export default function fly_drone() {
    const [drone_id, setDrone_id] = useState("");
    const [drone_tag, setDrone_tag] = useState(-1);
    const [arrival, setArrival] = useState("");

    // const fuelCalc = () => {
    //     let arrX = "";
    //     let arrY = "";
    //     let depX = "";
    //     let depY = "";
    //     Axios.get("http://localhost:3001/location/" + departure).then(r => {
    //         console.log(1 + " " + r.data);
    //         if (r.data.length === 0) {
    //             alert("Location does not exist");
    //             return;
    //         }
    //         depX = r.data.x_coord;
    //         depY = r.data.y_coord;
    //     });
    //     Axios.get("http://localhost:3001/location/" + arrival).then(r => {
    //         console.log(2 + " " + r.data);
    //         if (r.data.length === 0) {
    //             alert("Location does not exist");
    //             return;
    //         }
    //         arrX = r.data.x_coord;
    //         arrY = r.data.y_coord;
    //     });
    //     if (departure === arrival) {
    //         return true;
    //     } else {
    //         let fuelReq = Math.trunc(Math.sqrt(Math.pow(arrX - depX, 2) + Math.pow(arrY - depY, 2))) + 1;
    //         console.log(3 + " " + fuelReq);
    //         // Axios.get("http://localhost:3001/drone/" + arrival).then(r => {
    //         //     if (r.data.length === 0) {
    //         //         alert("Location does not exist");
    //         //         return;
    //         //     }
    //         // });
    //         return false;
    //     }
    // }
  
    const fly = () => {
      if (drone_id === ""|| drone_tag === -1 || arrival === "") {
        alert("please fill in fields");
        return;
      } else if (drone_id.length > 40) {
        alert("Drone Id too long");
        return;
    } 
    // else if (!fuelCalc()) {
    //     alert("Not Enough Fuel")
    //     return;
    //   }
      
    // };
    Axios.post("http://localhost:3001/other/fly_drone", {
                drone_id: drone_id,
                drone_tag: drone_tag,
                arrival: arrival,
            }).then(() => {
                console.log("success");
                document.location.href="/";
            });
    };
    return (
      <div>
        <Head>
          <title>Fly Drone</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <Navbar/>
        <Wrapper>
          <Field label={"Drone_Id"} value={drone_id} onChange={setDrone_id}/>
          <Field label={"Drone_Tag"} value={drone_tag} onChange={setDrone_tag}/>
          <Field label={"Arrival"} value={arrival} onChange={setArrival}/>
          <Button onClick={fly}>Fly Drone</Button>
        </Wrapper>
      </div>
    );
  }
