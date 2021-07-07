import './App.css';
import { Modal, Button,InputGroup,FormControl } from "react-bootstrap";
import l from "./suc.png"
// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import vabi from "./vault.js";
import React, { useState,useEffect } from "react";
import web3 from './web3';
import token from './token.js';


function MyVerticallyCenteredModal1(props) {
 
 var [tid4,setId4] = useState([]);
  
 

var myfunct=async()=>{
   var circulate = await vabi.methods.getCirculatingSupply().call();
 var balance = await vabi.methods.getBurnVaultBNBBalance().call();

 setId4(circulate/(balance/1000000000000000000));

   var a = document.getElementById("tid").value;
   // setId(a);
   
   var b =   (a * 1000000000) / tid4;
 document.getElementById("tid11").innerHTML = b.toFixed(15) ;
   
}


const swap = async() => {
   document.getElementById("mymodal").style.visibility="hidden";

   let account = await web3.eth.getAccounts();

   var maxtx  = await vabi.methods.maxTxAmount().call();
   
var burnbalan  = await vabi.methods.senderBurnBalance(account[0]).call();
     var bb = maxtx - burnbalan;
console.log(bb);
    var burnab1=(bb/1000000000);


    
      var a = document.getElementById("tid").value;

//alert(maxtx);
 if(a<=  100000){
 if( a <= burnab1){
        let amount = a * 1000000000;
     
     await vabi.methods.swap(amount).send({from:account[0]});
 
 }
 else{
 alert("The amount you entered must be less than the Availabe limit ");
 }}
 else{
 alert("The amount you entered must be less than the Maximum Transcation amount");
 }

   }
 
 
   return (
 
 
     
     <Modal
       {...props}
       style={{width:"500px" , marginLeft:"400px",}}
 
       size="lg"
       aria-labelledby="contained-modal-title-vcenter"
       id="mymodal"
       centered
     >
       <Modal.Header className="myModal" style={{backgroundColor:"#191919",color:"white"}} closeButton>
          
         <Modal.Title id="contained-modal-title-vcenter" >
           Amount to Swap
         </Modal.Title><br/><br/>
        
       </Modal.Header>
       
       <Modal.Body style={{backgroundColor:"#191919", color:"white"}}  className="myModal">
         <InputGroup>
   <InputGroup.Prepend>
    <h5>Black : </h5>&nbsp;
   </InputGroup.Prepend>
   <FormControl className="myInput" onChange={myfunct} id="tid" aria-label="Amount (to the nearest dollar)" /><br/>
   <InputGroup.Append>
   

   </InputGroup.Append>
 </InputGroup><br/>
 <InputGroup>
 <InputGroup.Prepend>
    <h5 >BNB : </h5>
   </InputGroup.Prepend>
 </InputGroup>
       </Modal.Body>
       <Modal.Footer style={{backgroundColor:"#191919"}}  className="myModal">
         <Button variant="primary" onClick={swap}>Swap</Button>
       </Modal.Footer>
     </Modal>
   );
 }
     










function Vault() {
   const [modalShow1, setModalShow1] = React.useState(false);


  const [tid,setId] = useState([]);
  const [tid1,setId1] = useState([]);
  const [tid2,setId2] = useState([]);
var [tid3,setId3] = useState([]);
var [tid4,setId4] = useState([]);
  var [tid5,setId5] = useState([]);
 var [tid6,setId6] = useState([]);
var [burnba,setburn] = useState([]);
var [maxta,setmaxt] = useState([]);
var [lct,setlct] = useState([]);
var [count,setcount]=useState("");
const[t1,setTim1 ] = useState("");
 const[t2,setTim2] = useState("");
 const[t3,setTim3 ] = useState("");
var[ltime,setltime] = useState("");
const[t4,setTime4] = useState("");
  var[t5,settime5]=useState("");

  const bal = async() => {
//timer

    let account = await web3.eth.getAccounts();
   
    if(account!=0){
     document.getElementById("cc").style.visibility="hidden";
      document.getElementById("cc1").innerHTML=account;

     setId2(await token.methods.balanceOf(account[0]).call());
     var circulate = await vabi.methods.getCirculatingSupply().call();
     var balance = await vabi.methods.getBurnVaultBNBBalance().call();
     setId4(circulate/(balance/1000000000000000000));
     setId5(1000000000 / (tid4));

    var maxtx  = await vabi.methods.maxTxAmount().call();
   setmaxt(maxtx);
var burnbalan  = await vabi.methods.senderBurnBalance(account[0]).call();
   
var bb = maxta - burnbalan;
console.log(bb);
    setburn(bb/1000000000);

const loc = await vabi.methods.lock(account[0]).call();

setlct(loc);


const b = await vabi.methods.secondsLeft(account[0]).call();


var countDownDate = new Date().getTime() + b * 1000; ;

var x = setInterval(function() {
   var now = new Date().getTime();
  var distance = countDownDate - now ;
    
  // Time calculations for days, hours, minutes and seconds
 var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
 // document.getElementById("demo").innerHTML = hours + "h "
 // + minutes + "m " + seconds + "s ";
setTime4(days);
setTim1(hours);
setTim2(minutes);
setTim3(seconds);



setcount(count);

  // If the count down is over, write some text 
  if (distance < 0) {
        clearInterval(x);
        console.log('CountDown Finished');
    }

  
}, 1000);





     var allowan = await token.methods.allowance(account[0],"0x4783aD97Df0C00C2ef8305F94885bA0Ff7c20547").call();
     if(allowan == 0){
      setId3(true);
      }
      else{
   setId3(false);
      }
      console.log(tid3);
      setId6(await vabi.methods.getBurnVaultBLACKBalance().call());
      }
   else{
      document.getElementById("cc").style.visibility="true";

   }
if(account!=0){
  document.getElementById("mm").style.visibility="hidden"

if(tid3=true){
   document.getElementById("sh").style.visibility="visible";
   document.getElementById("sh1").style.visibility="visible";
   document.getElementById("ap").style.visibility="hidden";
   document.getElementById("apbtn").style.visibility="hidden";

}
else{
  document.getElementById("ap").style.visibility="visible";
   document.getElementById("apbtn").style.visibility="visible";
   document.getElementById("sh").style.visibility="hidden";
   document.getElementById("sh1").style.visibility="hidden";
   document.getElementById("swap").style.visibility="hidden";

}
}
else{
  document.getElementById("mm").style.visibility="visible";
  document.getElementById("sh1").style.visibility="hidden";
  document.getElementById("ap").style.visibility="hidden";
  document.getElementById("apbtn").style.visibility="hidden";
  document.getElementById("sh").style.visibility="hidden";
  document.getElementById("swap").style.visibility="hidden";

}


   
  }
useEffect(()=>{bal()},[burnba])
 /* const myfunct = async() => {
   var a = document.getElementById("vlt").value;
   setId(a);
  
  var b =   (a * 1000000000) / tid4;
 
  setId1(document.getElementById("print").innerHTML = b );
  

  }
  const swap = async() => {
    alert(maxta) 
     if(tid <=  100000){
if( tid <= burnba){
    let account = await web3.eth.getAccounts();
       let amount = tid * 1000000000;
    
    await vabi.methods.swap(amount).send({from:account[0]});

}
else{
alert("The amount you entered must be less than the Availabe limit ");
}}
else{
alert("The amount you entered must be less than the Maximum Transcation amount");
}
  }*/
  const approve = async() => {
    let account = await web3.eth.getAccounts();
    await token.methods.approve("0x4783aD97Df0C00C2ef8305F94885bA0Ff7c20547",1000000000000000).send({from:account[0]});
  }
 t5=((t4*1440)+(t1*60)+(t2)+(t3/60));
 var ti=(t4+1)*1440;
//settime5(t5);
 if(t5>0){
count=`Starts in : ${t4}:${t1}:${t2}:${t3}`;
 }
 else{
    count="No Lock";
 }
 
  return (
   
  

     <body class="App container pl-5">
     <link href="css-circular-prog-bar.css" rel="stylesheet"/>

 <br></br>
<br></br>
     <center>


   

       
     <br/>
        <div class="container p-5">
        
<div class="row justify-content-end">
   <div class="col tiny">
   <h1 class="head">BURN VAULT</h1>
   </div>
   <div class="col">
  
   <div style={{ width: 200, height: 200 }}>
  <CircularProgressbar value={t5} text={count} maxValue={ti}  styles={buildStyles({
      textSize: '8px',textColor:'white',pathColor:'#17a2b8',
  })}/>
</div>
   </div>
</div>
<br /><br/><br/>
<div class="row justify-content-around">
   <div class="col-sm-5 col-ele">
   <text>Balance of my Black Token<br/> <h4> {tid2/1000000000}</h4></text>

   </div>
   <div class="col-sm-5 col-ele" >
   <text>Available Black Token in BurnVault  <br/><h4>  {tid6/1000000000}</h4></text><br />

   </div>
   
</div><br/><br/>
<div class="row justify-content-around">
   <div class="col-sm-5 col-ele">
   <text>1 Black <br/><h4> { parseFloat(1000000000/tid4).toFixed(15)} BNB</h4></text>

   </div>
   <div class="col-sm-5 col-ele" >
   <text>Maximum transaction limit <br/><h4>{maxta/1000000000}</h4></text><br />

   </div>
   
</div><br/><br/>

<br />



   <br/><br/><br/><br/>

<div class="container">
 <h3 id="mm">Please connect metamask .....</h3><br/>
<div class="row justify-content-around">
   <div class="col-sm-5 apsw">
<h5 id="ap">Before Swap we want to approve first</h5><br/>
<button class="btn btn-primary" id="apbtn" onClick={approve}>Approve</button><br/>
<img src={l} alt="" id="sh" height="100px" width="150px"/>
<h3 id="sh1">Approved</h3>
   </div>
   <div class="col-sm-5 apsw">

<br/>



   <text>Available limit for User to Swap :<b>  {burnba}</b></text><br /><br />

   <Button variant="primary" id="swap" onClick={() => setModalShow1(true)}>
          Swap
        </Button>
  
        <MyVerticallyCenteredModal1
          show={modalShow1}
          onHide={() => setModalShow1(false)}
        /><br/>
      </div>
</div>



<br/>

    </div> 

 </div>
     
     <br/>
     
      </center>



                    
                    

            
      </body>
  );
}

export default Vault;
