import React from 'react';
import './App.css';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepIcon from '@material-ui/core/StepIcon';
import C1 from "./c1";
import {useState,useEffect } from "react";
import n from "./n.png"
import web3 from './web3';
import vabi from "./vault.js";
import { Confirm } from './c1';
import Sc2 from "./sc2";
import Sc3 from "./sc3";
import Sc4 from "./sc4";
import Staking1 from './Staking (1)';
import token from './token';




function Stakee(){

  var [stake_value,setStake_value]=useState(0);
    const [toggleState, setToggleState] = useState(1);

    const[activeStep,setActiveStep]=useState(0);
      const nextStep =()=>{
      if(activeStep<4){
        setActiveStep((currentStep)=>currentStep+1)
        st();
       if(activeStep==0){
        document.getElementById("next").disabled=false;

       }
        if(activeStep==1){
          //setStake_value( document.getElementById("max").value);
          document.getElementById("next").disabled=false;


        }
        if(activeStep==2){
          document.getElementById("next").disabled=false;


        }
        if(activeStep==3){
          document.getElementById("next").disabled=false;

          stake1();
        }
       
      }
    }
    const previousStep =()=>{
      if(activeStep!=0){
        setActiveStep((currentStep)=>currentStep-1)

      }
    }
    const toggleTab = (index) => {
      setToggleState(index);
    };
    var stake1=async()=>{
    
        let account = await web3.eth.getAccounts();
    
    var am =window.v*1000000000;
    alert(am);
    if(am!=0){
        await Staking1.methods.deposit(am).send({from:account[0]});
    
    }
    
      }

function onc(){
  window.v=document.getElementById("max").value;
  
}

  
  function st(activeStep){

    
    switch(activeStep){
      case 0:{
        function conf(){
          if(document.getElementById("c4").checked==true){
            document.getElementById("next").disabled=false;

            window.c=1;
          
          }
          else{
            document.getElementById("next").disabled=true;

          }

        
        }
        return(

          <div>
<C1/>
          
<input  class="form-check-input" onClick={conf} type="checkbox"   id="c4"/>&nbsp;
        
        I have read the <a href="#">Terms and Conditions</a>
        
          </div>
          
          );
        }
      case 1:{

        var max = async() =>{
          let account = await web3.eth.getAccounts();

          var balance = await token.methods.balanceOf(account[0]).call();
          balance=balance/1000000000

          document.getElementById("max").placeholder=balance;
window.v=balance; 
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
                      <input type="text" id="max"   placeholder={0} onChange={onc} class="txtf"/>
          
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
      case 2:
      return(<Sc3/>);
      case 3:
        return(<Sc4/>);
      case 4:
if(window.v!=0){
  return(
    <div>
      <div class="container"><br/><br/>
        <h4>successfully done ......</h4>
        <br/>
      </div>
    </div>
    
            );
}
else{
  return(
<div>
      <div class="container"><br/><br/>
        <h4>Something went wrong...</h4>
        <br/>
      </div>
    </div>
  );
}
        

       default:
         return("");
    }
  }


  if(window.c==1){

  }
  
  function bal(){
    if (Confirm==0){
      //document.getElementById("next").disabled=true;
    }


if(window.c!=1){
  document.getElementById("next").disabled=true;

}

    
  }


  useEffect(()=>{bal()});

  
  
  


    return(
        <div>
<h2>STAKE YOUR BLACK</h2>
<Stepper orientation="horizontal" activeStep={activeStep} style={{backgroundColor:"black",color:"white"}}>
<Step>
<StepIcon>{n}</StepIcon>
</Step>
<Step >
<StepLabel></StepLabel>
</Step>


<Step>
<StepLabel></StepLabel>

</Step>
<Step>
  <StepLabel></StepLabel>
  
</Step>

</Stepper>


<div>
  {st(activeStep)}
</div>
<br/>
<br/>
<button onClick={previousStep} class="btn btn-info">previous</button>   &nbsp; &nbsp; 

     <button onClick={nextStep} id="next" class="btn btn-info" >Next</button>  


        </div>
    );
}

export default Stakee;