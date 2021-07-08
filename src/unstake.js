import {  useState } from "react";
import "./App.css";
import C1 from "./c1";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import C2 from "./c2";
import Usc3 from "./usc3";
import Usc4 from "./usc4";
import Usc5 from "./Usc5";

function Unstake(){


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
   
  function st(activeStep){
    switch(activeStep){
      case 0:
        return(<C2/>);
       case 1:
           return(<C1/>); 
        case 2:
          return(<Usc3/>);
        case 3:
          return(<Usc4/>);
        case 4:
          return(<Usc5/>);  
          default:
          return("Invalid");
    }
  }
  
  

    return(
<div>
        <h3>Unstake your BLACK</h3>

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