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




function Stakee(){

    const [toggleState, setToggleState] = useState(1);

    const[activeStep,setActiveStep]=useState(0);
  
    const nextStep =()=>{
      if(activeStep<4){
        setActiveStep((currentStep)=>currentStep+1)
        st();
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
  
  function st(activeStep){

    
    switch(activeStep){
      case 0:
        return(<C1/>);
       default:
         return("");
    }
  }
  
  
  
  
  


    return(
        <div>
<h2>Stake your BLACK</h2><br/>

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