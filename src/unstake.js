import {  useState } from "react";
import "./App.css";
import C1u from "./c1";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import C2 from "./c2";
import Usc3 from "./usc3";
import Usc4 from "./usc4";
import Usc5 from "./Usc5";
import web3 from './web3';
import token from './token';
import Staking1 from "./Staking (1)";
import Usc1 from "./usc1";

function Unstake(){


    const[activeStep,setActiveStep]=useState(0);
  
    const nextStep =()=>{

      if (activeStep==3){
      }
      if(activeStep==4){
       widd();
      }

      if(activeStep<5){
        setActiveStep((currentStep)=>currentStep+1)
        st();
      }
    }
    const previousStep =()=>{
      if(activeStep!=0){
        setActiveStep((currentStep)=>currentStep-1)
      }
    }
   
    function onc(){
      window.v=document.getElementById("max").value;
      
    }
var widd=async()=>{

  let account = await web3.eth.getAccounts();
  var wi=window.v;
  alert(wi);

  if(wi!=0){
    await Staking1.methods.withdraw(wi).send({from:account[0]});

}

}


  function st(activeStep){
    switch(activeStep){
      case 0:
        return(<C2/>);
       case 1:
           return(<Usc1/>); 
        case 2:
          {

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
              
              <h4>Please enter the amount of BLACK you want to Unstake</h4><br/>
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
        case 3:
          return(<Usc4/>);
        case 4:
          return(<Usc5/>);
        case 5:
          if(window.v!=0){
            return(
              <div>
                <div class="container"><br/><br/>
                  <h4>successfully done ......</h4>
                  <br/>                  <br/>
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
                  <br/>                  <br/>
                  <br/>

                </div>
              </div>
            );
          }
             
          default:
          return("");
    }
  }
  
  

    return(
<div>
        <h2>Unstake your BLACK</h2>
<Stepper orientation="horizontal" activeStep={activeStep} style={{backgroundColor:"black",color:"white"}}>
<Step >
<StepLabel></StepLabel>

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

     <button onClick={nextStep} class="btn btn-info">Next</button>  

</div>

    );
}
export default Unstake;