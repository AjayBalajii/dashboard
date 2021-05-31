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
var [tid3,setId3] = useState([]);
var [tid4,setId4] = useState([]);
  var [tid5,setId5] = useState([]);
 var [tid6,setId6] = useState([]);

  useEffect(()=>{bal()},[])
  const bal = async() => {


    let account = await web3.eth.getAccounts();
   
    if(account!=0){
     document.getElementById("cc").style.visibility="hidden";
      document.getElementById("cc1").innerHTML=account;
   }
   else{
      document.getElementById("cc").style.visibility="true";

   }
   
    setId2(await token.methods.balanceOf(account[0]).call());
    var circulate = await vabi.methods.getCirculatingSupply().call();
   var balance = await vabi.methods.getBurnVaultBNBBalance().call();
   setId4(circulate/(balance/1000000000000000000));
console.log("tid4",tid4);
   setId5(1000000000 / (tid4));
   //tid5=tid5.toFixed(2);
console.log( parseFloat(tid5).toFixed(10));
console.log(tid5);
   var allowan = await token.methods.allowance(account[0],"0x989FF32bf4158Bd651e6000a418B245beE69D5a7").call();
if(allowan == 0){
      setId3(true);
}
else{
   setId3(false);
}
    console.log(tid3);
 setId6(await vabi.methods.getBurnVaultBLACKBalance().call());
  }
  const myfunct = async() => {
   var a = document.getElementById("vlt").value;
   setId(a);
  
  var b = (a)/tid4;
 
  setId1(document.getElementById("print").innerHTML = b);
  

  }
  const swap = async() => {
     if(tid <11){
    let account = await web3.eth.getAccounts();
       let amount = tid * 1000000000;
    
    await vabi.methods.tokenFallback(account[0],amount).send({from:account[0]});
}
else{
alert("The amount you entered must be less than the Maximum Transcation amount");
}
  }
  const approve = async() => {
    let account = await web3.eth.getAccounts();
    await token.methods.approve("0x989FF32bf4158Bd651e6000a418B245beE69D5a7",1000000000000000).send({from:account[0]});
  }

  const connect = async() => {
   window.ethereum.enable();
   let account = await web3.eth.getAccounts();
  
//document.getElementById("cc").style.visibility="hidden";
document.getElementById("cc").style.visibility="hidden";
}

  return (
    <div className="App">
     
     <body >
        <button id="cc" class="container btn" style={{marginLeft:"800px"}} onClick={connect}>connect wallet</button>
        <button id="cc1" class="container btn" style={{marginLeft:"800px"}} ></button>

      <center>
        <br />
        <br />
       <h1>BURN VAULT</h1>
        <div class="card form-group">
<br />
         <text><b>Balance of my Black Token:{tid2/1000000000}</b></text>
<br /><br />
<text>1 Black = { parseFloat (tid5).toFixed(15)} BNB  </text><br /><br />
<br />
<text><b>BurnVault Black Token:{tid6/1000000000}</b></text><br /><br />
<br /><br />
<div>         

{ tid3 === true ? 
(
(
<div>
<h1>Before Swap we want to approve first</h1>
<br />
<button class="btn btn-primary" onClick={approve}>Approve</button>
</div>
)
):
(
(
<div>
 <text><b>Black:  </b></text> <input type = "number"  class="form-control" onChange = {myfunct} name="tid" id = "vlt" />
     
   <br/>
      <br />
      <br />
    
      {/* <text><b>BNB: </b>  </text><input type = "number" id ="print"  placeholder = {tid1} ></input> */}
      <text ><b>BNB: </b>  </text><input type = "number" id ="print"   placeholder = {tid1} ></input>
      <br />
      <br />
      <button onClick = {swap} class="btn">Swap</button>
</div>
)
)}
    </div> 
       
     
        </div>
     <br/>
      </center>
      </body>
      </div>
  );
}

export default App;
