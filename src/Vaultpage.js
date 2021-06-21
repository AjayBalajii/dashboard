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
var [burnba,setburn] = useState([]);
var [maxta,setmaxt] = useState([]);
var [lct,setlct] = useState([]);
const[t1,setTim1 ] = useState("");
 const[t2,setTim2] = useState("");
 const[t3,setTim3 ] = useState("");
var[ltime,setltime] = useState("");
const[t4,setTime4] = useState("");
  
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

    var maxtx  = await vabi.methods.maxTxAmount().call();
   setmaxt(maxtx);
var burnbalan  = await vabi.methods.senderBurnBalance(account[0]).call();
     var bb = maxta - burnbalan;
console.log(bb);
    setburn(bb/1000000000);

const loc = await vabi.methods.lock(account[0]).call();

setlct(loc);


const b = await vabi.methods.secondsLeft(account[0]).call();


var countDownDate = new Date().getTime() + b * 1000; ;

var x = setInterval(function() {
   var now = new Date().getTime();
  var distance = countDownDate - now ;
    
  // Time calculations for days, hours, minutes and seconds
 var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
 // document.getElementById("demo").innerHTML = hours + "h "
 // + minutes + "m " + seconds + "s ";
setTime4(days);
setTim1(hours);
setTim2(minutes);
setTim3(seconds);

    
  // If the count down is over, write some text 
  if (distance < 0) {
        clearInterval(x);
        console.log('CountDown Finished');
    }

  
}, 1000);





     var allowan = await token.methods.allowance(account[0],"0x4783aD97Df0C00C2ef8305F94885bA0Ff7c20547").call();
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
useEffect(()=>{bal()},[burnba])
  const myfunct = async() => {
   var a = document.getElementById("vlt").value;
   setId(a);
  
  var b =   (a * 1000000000) / tid4;
 
  setId1(document.getElementById("print").innerHTML = b );
  

  }
  const swap = async() => {
     
     if(tid <=  100000){
if( tid <= burnba){
    let account = await web3.eth.getAccounts();
       let amount = tid * 1000000000;
    
    await vabi.methods.swap(amount).send({from:account[0]});

}
else{
alert("The amount you entered must be less than the Availabe limit ");
}}
else{
alert("The amount you entered must be less than the Maximum Transcation amount");
}
  }
  const approve = async() => {
    let account = await web3.eth.getAccounts();
    await token.methods.approve("0x4783aD97Df0C00C2ef8305F94885bA0Ff7c20547",1000000000000000).send({from:account[0]});
  }

 

  return (
   
    
     <body class="App">
        


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
<text><b>Available Black Token in BurnVault   :  {tid6/1000000000}</b></text><br />
<br />

<text class="btn">1 Black = { parseFloat(1000000000/ tid4).toFixed(15)} BNB  </text><br /><br />
<br /><br />
<text>Maximum transaction limit  :<b>  {maxta/1000000000}</b></text><br /><br />
<br />


          {lct === true ? (
			 <div>
			 <text><i>Time Left to Unlock my account : <b id = "demo">{t4}d:{t1}h:{t2}m:{t3}s </b></i></text>
			 </div>
			 ):(
			 <div>
			 <text>No Lock</text><br />
<text>Available limit for User to Swap :<b>  {burnba}</b></text><br /><br />

			
 

   <br/><br/><br/><br/>

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
 <text><b>Black:  </b></text> <input type = "number"  width = "50%" onChange = {myfunct} name="tid" id = "vlt" />
     
   <br/>
      <br />
      <br />
    
     
      <text ><b>BNB: </b>  </text><input type = "string" id ="print"  placeholder = { parseFloat(tid1).toFixed(20)} ></input>
      <br />
      <br />
      <button onClick = {swap} class="btn">Swap</button>
</div>
)
)}
    </div> 

 </div>
			 )
			 }
       
     
        </div>
     <br/>
      </center>

<br></br>
<br></br>



                    
                    

            
      </body>
     
  );
}

export default Vault;
