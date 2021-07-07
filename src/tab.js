import {useState } from "react";
import "./App.css";
import Unstake from "./unstake";
//import Stepper from '@material-ui/core/Stepper';
//import Step from '@material-ui/core/Step';
//import StepLabel from '@material-ui/core/StepLabel';
//import StepIcon from '@material-ui/core/StepIcon';
//import { green } from '@material-ui/core/colors';
import Stakee from './stakee';
function Tabs() {
  
  const [toggleState, setToggleState] = useState(1);



  const toggleTab = (index) => {
    setToggleState(index);
  };








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
        <Stakee/>

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
