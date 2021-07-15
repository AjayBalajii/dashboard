import React, { useState,useEffect} from "react";
import './App.css';
import web3 from './web3';
import vabi from "./vault.js";

import $ from 'jquery';
import token from "./token";
window.count=0;

function conform(){
  window.count=1
}
export var Confirm=window.count;



function C1(){
 
const[c1,setc1 ] = useState("");
const[c2,setc2 ] = useState("");
const[c3,setc3 ] = useState("");
const[b1,setb1 ] = useState("");
const[b2,setb2 ] = useState("");

  useEffect(()=>{bal()});
const bal=async()=>{

  const account = await web3.eth.getAccounts();
if(account!=0){
  setb1( await vabi.methods.getBurnVaultBNBBalance().call());
  setb2(await token.methods.balanceOf(account[0]).call());
  
    var a=await vabi.methods.getBurnVaultBNBBalance().call();
  var b=await token.methods.balanceOf(account[0]).call()
  
  var cc1=document.getElementById("checklist11");
  var cc2=document.getElementById("checklist2");
  var cc3=document.getElementById("checklist3");
  var cc4=document.getElementById("checklist4");

  if( cc1!=null&&cc2!=null&&cc3!=null&&cc4!=null){
  cc1=cc1.checked=true;
  

  if(a!=0){
  setc1(document.getElementById("checklist3").checked=true);
   setc2(document.getElementById("checklist4").checked=true);
  
  }

  else{
    setc2(document.getElementById("checklist4").disabled=true);
   setc3(document.getElementById("checklist3").disabled=true);
   
  }
  if(b!=0){
    setc3(document.getElementById("checklist2").checked=true);

  }
  
  else{
    setc1(document.getElementById("checklist2").disabled=true);

   // document.getElementById("next").disabled=true;
  }





}

    
}
else{
  
  document.getElementById("checklist11").disabled=true;
  document.getElementById("checklist2").disabled=true;
  document.getElementById("checklist3").disabled=true;
  document.getElementById("checklist4").disabled=true;
  
}

}
/*function click(){
  if(c1&c2&c3==true){
    document.getElementById("next").disabled=false;
   
   

   }
}*/
    return(
        <div class="check" id="c1" class="container" style={{backgroundColor:"#0000 " ,padding:"20px", borderRadius:"20px"}}>
        <h5>Checkpoints</h5>
        
                  <p>
                  The following conditions must be met to proceed:
        </p>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-sm col-ele1">
              <div class="row">
                <div class="col-sm-9" style={{textAlign:"left"}}>
                <b style={{textAlign:"left"}}>Connected with MetaMask</b> <br/>
             If not connected, click the "Connect Wallet" button in the top right corner
             
                </div>
            <div class="col-sm">
        <input  class="form-check-input" type="radio" value="" id="checklist11"  />
        
        </div>
              </div>
        
        
            </div>
            <div class="col-sm col-ele1">
            <div class="row">
                <div class="col-sm-9" style={{textAlign:"left"}}>
                <b>BLACK available to deposit</b>  <br/><br/>
            <b> Current Balance:{b2/1000000000}</b>
        
                </div>
            <div class="col">
        <input  class="form-check-input" type="radio" value="" id="checklist2"  />
        
        </div>
              </div>
            
            </div>
            <div class="col-sm col-ele1">
            <div class="row">
            <div class="col-sm-9" style={{textAlign:"left"}}>
        
            <b>BNB available in wallet</b>  <br/>
             BNB is required to pay transaction fees on the Binance Smart Chain network.<br/>
       <b>BNB Balance: {b1/1000000000}  </b>
          </div>
            <div class="col">
        <input  class="form-check-input" type="radio" id="checklist3"  />
        
        </div>
              </div>
           </div>   
            <div class="col-sm col-ele1">
            <div class="row">
                <div class="col-sm-9" style={{textAlign:"left"}}>
                <b>Eligible to stake</b>  <br/>
             You cannot stake if you have an active BLACK unstake/withdrawal request    </div>
          
             <div class="col">
        <input  class="form-check-input "  type="radio"  id="checklist4"  />
        
        </div>
                </div>
           
              </div>
            </div>
        </div><br/>
       
        
        </div>
    );
}

export default C1;
