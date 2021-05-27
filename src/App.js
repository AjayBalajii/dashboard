import logo from './logo.svg';
import './App.css';
import vabi from "./vault.js";
import React, { useState,useEffect } from "react";
import web3 from './web3';
import token from './token.js';

function App() {
  const [tid,setId] = useState([]);
  const [tid1,setId1] = useState([]);
  const [tid2,setId2] = useState([]);
const [tid3,setId3] = useState([]);
  
  useEffect(()=>{bal()},[])
  const bal = async() => {
    let account = await web3.eth.getAccounts();
    setId2(await token.methods.balanceOf(account[0]).call());
    setId3(await token.methods._allowances(account[0],"0xccfEfc4a0A0AC9Bd647C536c47423E3F8B560c2d").call());
  }
  const myfunct = async() => {
   var a = document.getElementById("vlt").value;
   setId(a);

  var b = a/100000;
 
  setId1(document.getElementById("print").innerHTML = b);
  

  }
  const swap = async() => {
    let account = await web3.eth.getAccounts();
       let amount = tid * 1000000000;
    
    await vabi.methods.tokenFallback(account[0],amount).send({from:account[0]});
  }
 const approve = async() => {
    let account = await web3.eth.getAccounts();
    await token.methods.approve("0xccfEfc4a0A0AC9Bd647C536c47423E3F8B560c2d",1000000000000000).send({from:account[0]});
  }
  return (
    <div className="App">
     
     <body >
      <center>
        <br />
        <br />
       
        <div class="card form-group">
        <h1>BURN VAULT</h1>
<br />
         <text><b>Balance:{tid2/1000000000}</b></text>
<br />
<br />
<div>         

{tid3 <= 0 ? 
(
(
<div>
<button class="btn btn-primary" onClick={approve}>Approve</button>
</div>
)
):
(
(
<div>
 <text><b>VAULT:  </b></text> <input type = "number" class="form-control" onChange = {myfunct} name="tid" id = "vlt" />
     
   <br/>
      <br />
      <br />

      <text ><b>BNB: </b>  </text><input type = "number" id ="print"   placeholder = {tid1} ></input>
      <br />
      <br />
      <button onClick = {swap} class="btn">Swap</button>
</div>
)
)}
    </div> 
       
     
        </div>
     
      </center>
      </body>
      </div>
  );
}

export default App;
