import './App.css';
import { Modal, Button,InputGroup,FormControl,Nav,NavItem,NavLink,Sonnet,Tab } from "react-bootstrap";
import React, { useState,useEffect,useStyles } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Staking from './Staking (1)';
import Stepper1 from './stepper';

import web3 from './web3';

//import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { render } from '@testing-library/react';
import Tabs from'./tab';
import Staking1 from './Staking (1)';
        
   
function MyVerticallyCenteredModal1(props) {
    
  var stake1=async()=>{
    var x=document.getElementById("mymodal").style.visibility="hidden";

    let account = await web3.eth.getAccounts();

var am =document.getElementById("tid").value;
alert(am);
if(am!=0){
    await Staking1.methods.deposit(am).send({from:account[0]});

}

  }

    return (
   
      <Modal
        {...props}
        className="modal"
  
        size="auto"
        aria-labelledby="contained-modal-title-vcenter"
        id="mymodal"
        centered
      >
        <Modal.Header className="myModal" style={{backgroundColor:"#191919",color:"white"}} closeButton>
           
          <Modal.Title id="contained-modal-title-vcenter" >
            Amount to Stake
          </Modal.Title><br/><br/>
         
        </Modal.Header>
        
        <Modal.Body style={{backgroundColor:"#191919", color:"white"}}  className="myModal">
          <h4 style={{textAlign: "center"}}></h4>
          <InputGroup>
    <InputGroup.Prepend>
    
    </InputGroup.Prepend>
    <FormControl className="myInput"  id="tid" aria-label="Amount (to the nearest dollar)" /><br/>
    <InputGroup.Append>
    
 
    </InputGroup.Append>
  </InputGroup><br/>
  
        </Modal.Body>
        <Modal.Footer style={{backgroundColor:"#191919"}}  className="myModal">
          <Button variant="info" onClick={stake1}>Stake</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function MyVerticallyCenteredModal2(props) {
    
    var wid1=async()=>{
        var x=document.getElementById("mymodal").style.visibility="hidden";

      let account = await web3.eth.getAccounts();
  
  var wi =document.getElementById("tid1").value;
  alert(wi);
  if(wi!=0){
      await Staking1.methods.withdraw(wi).send({from:account[0]});
  
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
            <h4 style={{textAlign: "center"}}></h4>
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
      
 
 
 
 
 
 



function Stake(){

    const [modalShow1, setModalShow1] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);

   const cr=async()=>{
       alert("gi")
    await Staking1.methods.claimReward().call();
} 
    return(

        
        <div className="App">
<div class="container-fluid">
<div class="row">
    <div class="col-sm-9">
    <Tabs/>
    </div>
    <div class="col-sm-3">
    <div class=" col-ele">Staked<br/><hr style={{height:"0px", width:"90%",margin: "auto"}}/>....</div><br/>
    <div class=" col-ele">Unstaked<br/><hr  style={{height:"0px",width:"90%",margin: "auto"}}/>....</div><br/>
    <div class=" col-ele">Rewards<br/><hr  style={{width:"90%", height:"0px",margin: "auto"}}/>....
    <br/><br/>

    <button class="btn btn-sm btn-info"  id="swap" onClick={() => setModalShow1(true)}>
          Stake
        </button>&nbsp;
  
        <MyVerticallyCenteredModal1
          show={modalShow1}
          onHide={() => setModalShow1(false)}
        /> 
        
        
    <button class="btn btn-sm btn-info"  id="swap" onClick={() => setModalShow2(true)}>
          Withdraw
        </button>&nbsp;
  
        <MyVerticallyCenteredModal2
          show={modalShow2}
          onHide={() => setModalShow1(false)}
        />   
   <button class="btn btn-sm btn-info" onClick={cr}>Claim Rewards</button>


    </div>

    </div>
</div>

</div>
<br/><br/><br/><br/>
    </div>
    
        
    );


}

export default Stake;
