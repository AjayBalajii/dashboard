import React, {useState } from "react";
import "./App.css";
import {Modal,Button,InputGroup,FormControl,} from "react-bootstrap";
import web3 from './web3';

import Unstake from "./unstake";
//import Stepper from '@material-ui/core/Stepper';
//import Step from '@material-ui/core/Step';
//import StepLabel from '@material-ui/core/StepLabel';
//import StepIcon from '@material-ui/core/StepIcon';
//import { green } from '@material-ui/core/colors';
import Stakee from './stakee';
import Staking1 from "./Staking (1)";

/*
function MyVerticallyCenteredModal2(props) {
    
  var wid1=async()=>{
      document.getElementById("mymodal").style.visibility="hidden";

    let account = await web3.eth.getAccounts();

var wi =document.getElementById("tid1").value;
alert(wi);
if(wi!=0){
    await Staking1.methods.emergencyWithdraw(wi).send({from:account[0]});

}

  }

    return (
   
      <Modal
        {...props}
  
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        id="mymodal"
        centered
      >
        <Modal.Header className="myModal" style={{backgroundColor:"#191919",color:"white"}} closeButton>
           
          <Modal.Title id="contained-modal-title-vcenter" >
            Amount to Withdraw
          </Modal.Title><br/><br/>
         
        </Modal.Header>
        
        <Modal.Body style={{backgroundColor:"#191919", color:"white"}}  className="myModal">
          <InputGroup>
    <InputGroup.Prepend>
    
    </InputGroup.Prepend>
    <FormControl className="myInput"  id="tid1" aria-label="Amount (to the nearest dollar)" /><br/>
    <InputGroup.Append>
    
 
    </InputGroup.Append>
  </InputGroup><br/>
  
        </Modal.Body>
        <Modal.Footer style={{backgroundColor:"#191919"}}  className="myModal">
          <Button variant="info" onClick={wid1}>Withdraw</Button>
        </Modal.Footer>
      </Modal>
    );
  }
    

*/




function Tabs() {
  
  const [toggleState, setToggleState] = useState(1);

  const [modalShow2, setModalShow2] = React.useState(false);


  const toggleTab = (index) => {
    setToggleState(index);
  };



  const wi=async()=>{
  alert("emergency withdraw")
    await Staking1.methods.emergencyWithdraw().call();
  }




  return (
    <div className="container">
<link rel="stylesheet" href="bs-stepper.min.css"/>

      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          STAKE
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          UNSTAKE
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          WITHDRAW
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
                    <br/><br/>

          <h2 style={{color:"#ffff",textTransform:"uppercase"}}>Emergency Withdraw</h2>
          <br/>
          <br/>
         <button class="btn btn-info" onClick={wi}>Withdraw</button>
         
          <br/><br/>
          <br/><br/>
          <br/><br/>
          <br/><br/>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
