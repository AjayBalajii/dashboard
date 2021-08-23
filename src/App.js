import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import web3 from './web3';
import token from './token.js';
import Black from './black.js';
import {BrowserRouter as Router , Route , Link , Switch } from "react-router-dom";
//import history from "./utils/history";
//import vault from './vault.js';
import { Navbar } from 'react-bootstrap';
//import { Button,ButtonGroup } from 'react-bootstrap';
//import sidebar from './sidebar';
import { slide as Menu } from 'react-burger-menu';
//import Terms from './terms';
import {
   CircularProgressbar,
  
   buildStyles
 } from "react-circular-progressbar";
 import "react-circular-progressbar/dist/styles.css";
 
function App() {
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



   const[ac2,setac2]=useState("");


   const connect = async() => {
      window.ethereum.enable();
      setac2(await web3.eth.getAccounts());

     // let account = await web3.eth.getAccounts();
     
   //document.getElementById("cc").style.visibility="hidden";
  // document.getElementById("cc").style.visibility="hidden";
   //window.location.reload();
   }
      


   const bal = async() => {
      document.body.style.backgroundColor="black";

  if(ac2!=0){
  //Returns the Balance of account
   const a1 = await token.methods.balanceOf(ac2[0]).call();
     setId(a1/1000000000);
     
  
  //Returns the seconds left for Locking account;
         setId3(await token.methods._isFrozen(ac2[0]).call());
          const b = await token.methods._secondsLeft(ac2[0]).call();
         setId1(b);
  
  console.log("locktime",b);
  //timing concept
     var timestamp = b;
  
  
  var hours = Math.floor(timestamp / 60 / 60);
  
  
  var minutes = Math.floor(timestamp / 60) - (hours * 60);
  
  
  var seconds = timestamp % 60;
  
  var formatted = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
  
  setId6(formatted);
  
         
  
  var myCurrentDate=new Date();
  var myPastDate=new Date(myCurrentDate);
     var e = myPastDate.setDate(myPastDate.getDate() - 1);
  setId8(e/1000);
  console.log("date",e);
  
  
  
  
  
  
  
  var countDownDate = new Date().getTime() + b * 1000; ;
  
  var x = setInterval(function() {
     var now = new Date().getTime();
    var distance = countDownDate - now ;
      
    // Time calculations for days, hours, minutes and seconds
   // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
   // document.getElementById("demo").innerHTML = hours + "h "
   // + minutes + "m " + seconds + "s ";
  setTim1(hours);
  setTim2(minutes);
  setTim3(seconds);
      
    // If the count down is over, write some text 
    if (distance < 0) {
          clearInterval(x);
          console.log('CountDown Finished');
      }
  
    
  }, 1000);
  
  const response = await fetch("https://api-testnet.bscscan.com/api?module=account&action=tokentx&contractaddress=0xdC995010C029c3E171c492F5C08F296f8e021B97&address="+ac2[0]+"&page=1&offset=100&sort=asc&apikey=YourApiKeyToken");
  const data = await response.json();
  setId7(data.result);
  
  var coun  = 0;
  
  
  
  var myName = ac2[0];
  const myadd = '"' + myName + '"';
  
  
  var myna = parseInt(ac2[0]);
  
  
  for(var i = 0;i < datas.length;i++){ 
  
  let ad = parseInt(datas[i].from);
  
  const ad1 = '"' +  datas[i].from + '"';
  const myadd = '"' + myName + '"';
  
  var compareNum =0;
  if(datas[i].timeStamp >= dates){
         if( myna == ad){
             coun = coun + 1 ;
             console.log("equal",coun);
           }
  
  }}
  if(coun < 0){
  setId5("Nil");
  }
  else{
  setId5(coun);
  }
  setcount(count1);
  }
  
   }
  

   useEffect(()=>{bal()});
   t5=((t1*60)+(t2)+(t3/60));
   ti=((t1+1)*60);
   //settime5(t5);
   if(t5>0){
   count1=`Starts in: ${t1}:${t2}:${t3}`;
    }
    else{
       count1=" Unlock";
    }
  
  return (
     
   <div class="App">
        
   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous"/>

   <div>
      
  

   <Router>
   <Navbar className="bg">
          <Navbar.Brand>
             <img src={logo} height="70px" alt="" style={{marginLeft:"60px"}}></img>
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
         {
            ac2!=0?((
               <div>
                          <button id="cc1" class="btn-flat  btn-bloc cc1"  >{ac2}</button>


               </div>
            )):
            ((
               <div>
      <button id="cc" class="btn-flat  btn-bloc cc"  onClick={connect}>connect wallet</button>

               </div>
            ))
         }

</Navbar.Collapse>
</Navbar>
   <Menu >
   <a class="navlink11"   href="https://blackcollateral.com/">

Home
</a>

   <Link class="navlink11"  exact to="/black">

Dashboard

</Link>
 
<a class="navlink11"   href="https://vault-mu.vercel.app/">Burn vault </a>
       <a class="navlink11"   href="https://blackstaking.vercel.app/">

Staking
</a>      
      
    </Menu>



     <Switch>

</Switch>

</Router>



</div>
<div>
<center>
  <div>
      <div class="container">
      
      <h1 class="head">DASHBOARD</h1>
<br/>
 
<div class="row justify-content-center pl-5 ml-1">
  <div class="col-sm-6 ">
  
     <div class="row justify-content-center pl-3">
       <div class="col-sm col-elea pt-4" >
       <h6  style={{color:"#5bc0de",textTransform:"uppercase"}}>
   <b> Black Token Balance</b>  <br/><hr class="hr"/></h6><h4> {tid}</h4>
       </div><br/>
      
       <div class="col-sm">
  <div style={{ width: 150, height: 150 }}>
  <CircularProgressbar value={t5} text={count1} maxValue={ti} styles={buildStyles({
      textSize: '8px',textColor:'white',pathColor:'#5bc0de',
  })}/>
</div>
       </div>
     

  </div><br/>
  <div class="col-elea align-items-center p-5">
  <text style={{color:"#5bc0de",textTransform:"uppercase"}}><b>Number of Transaction in last 24 hours </b></text><hr class="hr"/><h4>{con}</h4> 

  
     </div>

  </div>
  
<div class="col-sm-6 col-elea" >
<h3 style={{color:"#5bc0de",textTransform:"uppercase"}}><b>Transaction History</b></h3>
<hr class="hr"/>
  <div  style={{overflow:"scroll",height:"255px"}}>
    <div class="row ">
      <div class="col-sm-6">
      {datas.length === 0 ? null : (
       <div>
          

<div class="container-fluid table-responsive">
<table className="table  table-borderless">
          <thead>
          <tr>
      
    <th class="cell " scope="col">To</th>
    

    </tr>
  </thead>
  <tbody>

  {datas.map((datas)=>{
     return (
       <div >
{ datas.timeStamp >= dates ? (
  
    <tr>

      <td class="cell">{datas.to}</td>
     
    </tr>
    
  ):null }
  </div>
       
      ) 
       
   
 })}
    </tbody>
    

</table>



</div>

  

      </div>

)}
      </div>
      <div class="col-sm-3">
      {datas.length === 0 ? null : (
       <div>
          

<div class="container table-responsive">
<table className="table  table-borderless">
          <thead>
          <tr>
      
    <th class="cell " scope="col">Value</th>


    </tr>
  </thead>
  <tbody>

  {datas.map((a)=>{
     return (
       <div >
{ a.timeStamp >= dates ? (
  
    <tr>

     
      <td class="cell">{a.value}</td>
     
    </tr>
    
  ):null }
  </div>
       
      ) 
       
   
 })}
    </tbody>
    

</table>



</div>

  

      </div>

)}
      </div>
      <div class="col-sm-3">

      {datas.length === 0 ? null : (
       <div>
          

<div class="container table-responsive">
<table className="table  table-borderless">
          <thead>
          <tr>
      
   
    <th class="cell " scope="col">TxHash</th>


    </tr>
  </thead>
  <tbody>

  {datas.map((a)=>{
     return (
       <div >
{ a.timeStamp >= dates ? (
  
    <tr>

     
      <td class="cell">  
           <a class="link" href={"https://testnet.bscscan.com/tx/"+a.hash}>view</a>
            </td>
    </tr>
    
  ):null }
  </div>
       
      ) 
       
   
 })}
    </tbody>
    

</table>



</div>

  

      </div>

)}
      </div>
    </div>



</div>
      
</div>



</div>
<br/><br/>



</div>
 
     <br/>
</div>    
</center>
</div>
</div>

  );
}


export default App;
