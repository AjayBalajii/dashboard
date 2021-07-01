import { useEffect, useState } from "react";
import "./App.css";
import web3 from './web3';
import token from './token.js';
import vabi from "./vault.js";
import C1 from "./c1";
import Unstake from "./unstake";

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepIcon from '@material-ui/core/StepIcon';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import CheckIcon from '@material-ui/icons/Check';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';


import {InputGroup} from "react-bootstrap";
import { Checkbox } from "@material-ui/core";
function Tabs() {
  const [tid,setId] = useState("");
  const [tid1,setId1] = useState("");
   const [value,setId4] = useState([]);
  const[datas,setId7] = useState("");
  const [dates,setId8] = useState("");
  const [lock,setId3] = useState("");
  const [locktime,setId6] = useState("");
   const [con, setId5] = useState("");
   const[acc,setId9] = useState("");
   const[t1,setTim1 ] = useState("");
 const[t2,setTim2] = useState("");
 const[t3,setTim3 ] = useState("");
 var[t5,settime5]=useState("");
var [count1,setcount]=useState("");
var [ti,setti]=useState("");
const[c1,setc1 ] = useState("");
const[c2,setc2 ] = useState("");
const[c3,setc3 ] = useState("");

  const [toggleState, setToggleState] = useState(1);

  const[activeStep,setActiveStep]=useState(0);

  const nextStep =()=>{
    if(activeStep<4){
      setActiveStep((currentStep)=>currentStep+1)
      st();
    }
  }
  const previousStep =()=>{
    if(activeStep!==0){
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
      break;
      
  }
}







  return (
    <div className="container">
<link rel="stylesheet" href="bs-stepper.min.css"/>

      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Stake
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Unstake
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Withdraw
        </button>
       
    </div>
      

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>Stake your BLACK</h2><br/>

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

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
         <Unstake/>


        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Content 3</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
