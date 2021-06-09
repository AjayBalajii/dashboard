import logo from './logo.svg';
import './App.css';
import vabi from "./vault.js";
import React, { useState,useEffect } from "react";
import web3 from './web3';
import token from './token.js';
import vault from './vault.js';

function Black() {
  const [tid,setId] = useState([]);
  const [tid1,setId1] = useState([]);
useEffect(()=>{bal()},[])
  const bal = async() => {
    let account = await web3.eth.getAccounts();
const a = await token.methods.balanceOf(account[0]).call();
  setId(a/1000000000);
const b = await vault.methods.secondsLeft(account[0]).call();
  setId1(b);
const response = await fetch("https://api-testnet.bscscan.com/api?module=account&action=tokentx&address=0xDE949e5CC31062c71aD5180f050eE3b7C9f79037&startblock=0&endblock=99999999&sort=asc&apikey=YourApiKeyToken");
var data = await response.json();
var c = data.result;
var length = c.length;
for(var i =0;i<= length;i++){
   var item = c[i];
    console.log(item.blockNumber);
   if(item.blockNumber == 9574548){
       setId1(item.to); 
    }
  } 
var d = c[0];
console.log(d);
var E = d.to;
console.log(tid1);

}


  
  



  return (
    
     
     <body >
        

      <center>
        <br />
        <br />
       <h1>BURN VAULT</h1>
       <br /><br />
<h1>Registered Employees</h1>
          <table id="employees">


</table>
     <br/>
      </center>
      </body>
      
  );
}

export default Black;
