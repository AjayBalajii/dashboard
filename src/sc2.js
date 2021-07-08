
import React, { useState } from 'react';
import './App.css';
import vabi from "./vault.js";
import Vault from "./Vaultpage";
 

export const fs=1000;

window.v=1;
  
function Value(){

window.v=document.getElementById("max").value  ;
alert(window.v)
if(window.v==0){
    window.v=0;

}
 
  
  } 
 
var x=window.v;
//alert(x)
export var v1=x;

  function next1(){
alert(window.v)
  } 

function Sc2(){
    const [tid,setId] = useState("");

var bal=0;
    var max = async() =>{
     
        var balance = await vabi.methods.getBurnVaultBNBBalance().call();
        document.getElementById("max").placeholder=balance;

    }



    return(

        <div class="check" style={{backgroundColor:"#0000 " ,padding:"20px", borderRadius:"20px"}}>
<br/>

<h4>Please enter the amount of BLACK you want to stake</h4><br/>
<br/>
<div class="">
  <div class="row">
      
    <div class="col-sm-6 offset-sm-3 col-ele ">
    <label>
    <p>Amount</p>
    

    
        <div class="row justify-content-center">
            <div class="col-sm">
            <input type="text" id="max"   placeholder={bal} onChange={Value} class="txtf"/>

            </div>
            <div class="col-sm">
                <button class="btn btn-info" onClick={max}>MAX</button>
            </div>
        </div>
              <br/>

</label>
    </div>
    </div>
</div>
<br/>
        </div>
    );
}

export default Sc2 ;