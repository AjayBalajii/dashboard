import logo from './logo.svg';
import './App.css';
import vabi from "./vault.js";
import React, { useState,useEffect } from "react";
import web3 from './web3';

function App() {
  const [tid,setId] = useState([]);
  const [tid1,setId1] = useState([]);
  
  const myfunct = async() => {
   var a = document.getElementById("vlt").value;
   setId(a);
  //  alert(a);
   //var d = a * 1000000000;
   var b = a * 0.00001;
  setId1(document.getElementById("print").innerHTML = b);
  

  }
  const swap = async() => {
    let account = await web3.eth.getAccounts();
    alert(tid)
    let amount = tid * 1000000000;
    let amount1= amount + "000000000"
    alert(amount1)
    await vabi.methods.transfer("0xD7f05A424487Fe56b3B396A2191CB42249f2e5Fd",amount1).send({from:account[0]});
  }
  return (
    <div className="App">
      <body >
      <center>
        <br />
        <br />
      <text>VAULT</text> <input type = "number" onChange = {myfunct} name="tid" id = "vlt" />
      <p id = "print"></p>
   <br/>
      <br />
      <br />
    
      <text>BNB  </text><textbox> {tid1} </textbox><br />
      <br />
      <button onClick = {swap}>Swap</button>
     
      </center>
      </body>
      </div>
  );
}

export default App;
