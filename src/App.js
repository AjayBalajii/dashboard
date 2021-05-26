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
       let amount = tid * 1000000000;
    let amount1= amount + "000000000";
    await vabi.methods.transfer("0xcDD7a614895441D1d225D6a81355950c32dcCB7d",amount1).send({from:account[0]});
  }
  return (
    <div className="App">
     
     <body >
      <center>
        <br />
        <br />
       
        <div class="card form-group">
        <h1>BURN VAULT</h1>
        <text><b>VAULT:  </b></text> <input type = "number" class="form-control" onChange = {myfunct} name="tid" id = "vlt" />
     
   <br/>
      <br />
      <br />
    
      {/* <text><b>BNB: </b>  </text><input type = "number" id ="print"  placeholder = {tid1} ></input> */}
      <text ><b>BNB: </b>  </text>"<input type = "number" id ="print"  color = "#ff0000"  placeholder = {tid1} ></input>
      <br />
      <br />
      <button onClick = {swap} class="btn">Swap</button>
     
        </div>
     
      </center>
      </body>
      </div>
  );
}

export default App;
