import logo from './logo.svg';
import './App.css';
import vabi from "./vault.js";
import React, { useState,useEffect } from "react";
import web3 from './web3';
import token from './token.js';
import Black from './black.js';
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";

function Vault() {
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

     setId2(await token.methods.balanceOf(account[0]).call());
     var circulate = await vabi.methods.getCirculatingSupply().call();
     var balance = await vabi.methods.getBurnVaultBNBBalance().call();
     setId4(circulate/(balance/1000000000000000000));
     setId5(1000000000 / (tid4));
   
    
     var allowan = await token.methods.allowance(account[0],"0xDE949e5CC31062c71aD5180f050eE3b7C9f79037").call();
     if(allowan == 0){
      setId3(true);
      }
      else{
   setId3(false);
      }
      console.log(tid3);
      setId6(await vabi.methods.getBurnVaultBLACKBalance().call());
      }
   else{
      document.getElementById("cc").style.visibility="true";

   }
   
  }
  const myfunct = async() => {
   var a = document.getElementById("vlt").value;
   setId(a);
  
  var b =   (a * 1000000000) / tid4;
 
  setId1(document.getElementById("print").innerHTML = b );
  

  }
  const swap = async() => {
     if(tid < 11){
    let account = await web3.eth.getAccounts();
       let amount = tid * 1000000000;
    
    await vabi.methods.swap(amount).send({from:account[0]});
}
else{
alert("The amount you entered must be less than the Maximum Transcation amount");
}
  }
  const approve = async() => {
    let account = await web3.eth.getAccounts();
    await token.methods.approve("0xDE949e5CC31062c71aD5180f050eE3b7C9f79037",1000000000000000).send({from:account[0]});
  }

  const connect = async() => {
   window.ethereum.enable();
   let account = await web3.eth.getAccounts();
  
//document.getElementById("cc").style.visibility="hidden";
document.getElementById("cc").style.visibility="hidden";
}

  return (
   
    
     <body >
        <button id="cc" class="btn btn-info btn-bloc" style={{marginLeft:"800px"}} onClick={connect}>connect wallet</button>
        <button id="cc1" class="btn btn-info btn-bloc" style={{marginLeft:"800px"}} ></button>




              <br></br>
<br></br>

      <center>
        <br />
        <br />
       <h1>BURN VAULT</h1>
       <br /><br />
        <div >
<br />
         <text ><b>Balance of my Black Token : {tid2/1000000000}</b></text>
<br /><br />
<text><b>Available Black Token in BurnVault   :  {tid6/1000000000}</b></text><br /><br />
<br />

<text class="btn">1 Black = { parseFloat(1000000000/ tid4).toFixed(15)} BNB  </text><br /><br />
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
    
     
      <text ><b>BNB: </b>  </text><input type = "string" id ="print"  placeholder = { parseFloat(tid1).toFixed(15)} ></input>
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

<br></br>
<br></br>



                    
                    

            
      </body>
     
  );
}

export default Vault;
