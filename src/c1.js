import React, { useState,useEffect} from "react";
import './App.css';
import web3 from './web3';
import vabi from "./vault.js";


function C1(){
 
const[c1,setc1 ] = useState("");
const[c2,setc2 ] = useState("");
const[c3,setc3 ] = useState("");

  useEffect(()=>{bal()});
const bal=async()=>{

  const account = await web3.eth.getAccounts();
  
if(account!=0){
 
    var a=await vabi.methods.getBurnVaultBLACKBalance().call();

  
if (account!=0){
  document.getElementById("checklist1").checked=true;


  if(a!=0){
  setc1(document.getElementById("checklist2").checked=true);
    setc2(document.getElementById("checklist4").checked=true);
   setc3(document.getElementById("checklist3").checked=true);
   
   
   
  }
  else{
   // document.getElementById("next").disabled=true;
  }


}


}
else{
  document.getElementById("checklist1").disabled=true;
  setc1(document.getElementById("checklist2").disabled=true);
    setc2(document.getElementById("checklist4").disabled=true);
   setc3(document.getElementById("checklist3").disabled=true);
   
}
}
/*function click(){
  if(c1&c2&c3==true){
    document.getElementById("next").disabled=false;
   
   

   }
}*/
    return(
        <div class="container" style={{backgroundColor:"#060606 " ,padding:"20px", borderRadius:"20px"}}>
        <h5>Checkpoints</h5>
        
                  <p>
                  The following conditions must be met to proceed:
        </p>
        <div class="container" style={{backgroundColor:"#060606"}}>
          <div class="row justify-content-center">
            <div class="col-sm col-ele1">
              <div class="row">
                <div class="col-9">
                <b>Connected with MetaMask</b> <br/>
             If not connected, click the "Connect Wallet" button in the top right corner
             
                </div>
            <div class="col">
        <input  class="form-check-input" type="radio" value="" id="checklist1"   / >
        
        </div>
              </div>
        
        
            </div>
            <div class="col-sm col-ele1">
            <div class="row">
                <div class="col-9">
                <b>BLACK available to deposit</b>  <br/><br/>
             Current Balance: 0.0000
        
                </div>
            <div class="col">
        <input  class="form-check-input" type="radio" value="" id="checklist2"  />
        
        </div>
              </div>
            
            </div>
            <div class="col-sm col-ele1">
            <div class="row">
            <div class="col-9">
        
            <b>BNB available in wallet</b>  <br/>
             BNB is required to pay transaction fees on the Binance Smart Chain network.<br/>
        BNB Balance: 0.0000  
          </div>
            <div class="col">
        <input  class="form-check-input" type="radio" id="checklist3"  />
        
        </div>
              </div>
           </div>   
            <div class="col-sm col-ele1">
            <div class="row">
                <div class="col-9">
                <b>Eligible to stake</b>  <br/>
             You cannot stake if you have an active BLACK unstake/withdrawal request    </div>
          
             <div class="col">
        <input  class="form-check-input "  type="radio"  id="checklist4"  />
        
        </div>
                </div>
           
              </div>
            </div>
        </div><br/>
        <input  class="form-check-input" type="checkbox"   id="c4"/>&nbsp;
        
        I have read the <a href="#">Terms and Conditions</a>
        
        
        </div>
    );
}

export default C1;
