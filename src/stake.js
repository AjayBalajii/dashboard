import './App.css';
import {Modal,Button,InputGroup,FormControl,} from "react-bootstrap";
import "react-responsive-modal/styles.css";
//import { Modal } from "react-responsive-modal";
import HorizontalLinearStepper from "./stepper"
import React, { useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import web3 from './web3';
import Tabs from'./tab';
import Staking1 from './Staking (1)';
import "react-responsive-modal/styles.css";
import token from './token';
  




function MyVerticallyCenteredModal1(props) {
    
  var stake1=async()=>{
  document.getElementById("mymodal").style.visibility="hidden";

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
        dialogClassName="custom-modal"
      bsClass="my-modal"
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
        document.getElementById("mymodal").style.visibility="hidden";

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
    //const [modalShow3, setModalShow3] = React.useState(false);
const [userinfo,setuserinfo]=useState([]);
    const [reward,setReward]=useState("");
  const [tbs,setTbs]=useState("");

    


   const cr=async()=>{
       alert("claim reward")
    await Staking1.methods.claimReward().call();
} 
const bal= async()=>{
  document.body.style.backgroundColor="black";

  let account = await web3.eth.getAccounts();

  setReward(await Staking1.methods.pendingBlack(account[0]).call());
  setTbs(await token.methods.balanceOf("0xf1ff561190950Ed9020fe62DB83045dED760A606").call());
  setuserinfo(await Staking1.methods.userInfo(account[0]).call());
 // await Staking1.methods.userInfo(account[0]).call()
}
useEffect(()=>{bal()})

    return(

        <div className="App">
<div class="container-fluid">


<div class="row">
    <div class="col-sm-9">
    <Tabs/>
    </div>
    <div class="col-sm-3">
    <div class=" col-ele"><h5 style={{color:"#5bc0de",textTransform:"uppercase"}}><b>Staked</b></h5><hr style={{height:"0px", width:"90%",margin: "auto"}}/>{userinfo[0]/1000000000}</div><br/>
 
    <div class=" col-ele"><h5 style={{color:"#5bc0de",textTransform:"uppercase"}}><b>Total BLACK Staked</b></h5><hr style={{height:"0px", width:"90%",margin: "auto"}}/>{tbs/1000000000}</div><br/>
    <div class=" col-ele"><h5 style={{color:"#5bc0de",textTransform:"uppercase"}}><b>APY</b></h5><hr style={{height:"0px", width:"90%",margin: "auto"}}/>....</div><br/>
    <div class=" col-ele"><h5 style={{color:"#5bc0de",textTransform:"uppercase"}}><b>Rewards</b></h5><hr  style={{width:"90%", height:"0px",margin: "auto"}}/>{reward/1000000000}
    
    <br/><br/>

    <button class="btn btn-sm btn-info"  id="swap" onClick={() => setModalShow1(true)}>
          Stake
        </button>&nbsp;
  
        <MyVerticallyCenteredModal1
          show={modalShow1}
          onHide={() => setModalShow1(false)}
        /> 
        
        
    <button class="btn btn-sm btn-info"  id="swap" onClick={() => setModalShow2(true)}>
          Unstake
        </button>&nbsp;
  
        <MyVerticallyCenteredModal2
          show={modalShow2}
          onHide={() => setModalShow2(false)}
        />   
   <button class="btn btn-sm btn-info" onClick={cr}>Claim Rewards</button>


    </div><br/>

    </div>
</div>

</div>
<br/><br/><br/><br/>

    </div>
    
        
    );


}

export default Stake;
