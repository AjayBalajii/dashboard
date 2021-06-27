import logo from './logo.svg';
import './App.css';
//import vabi from "./vault.js";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import React, { useState,useEffect } from "react";
import web3 from './web3';
import token from './token.js';
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


function NewfileMar() {
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
let account =  web3.eth.getAccounts();
var [count1,setcount]=useState("");
var [ti,setti]=useState("");
  const bal = async() => {
    let account = await web3.eth.getAccounts();

//Returns the Balance of account
 const a = await token.methods.balanceOf(account[0]).call();
   setId(a/1000000000);
	

//Returns the seconds left for Locking account;
       setId3(await token.methods._isFrozen(account[0]).call());
        const b = await token.methods._secondsLeft(account[0]).call();
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





const response = await fetch("https://api-testnet.bscscan.com/api?module=account&action=tokentx&contractaddress=0x85986F018314E42A2a0881f54868AB00f7b6f386&address="+account[0]+"&page=1&offset=100&sort=asc&apikey=YourApiKeyToken");
const data = await response.json();
setId7(data.result);

var coun  = 0;



var myName = account[0];
const myadd = '"' + myName + '"';


var myna = parseInt(account[0]);


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
useEffect(()=>{bal()},[con])

t5=((t1*60)+(t2)+(t3/60));
ti=((t1+1)*60);
//settime5(t5);
if(t5>0){
count1=`Starts in: ${t1}:${t2}:${t3}`;
 }
 else{
    count1="No Lock";
 }

// usage





  return (
    
    <div  > 

     <body  class="App" >
        
<center>
  <div>
      <div class="container">
        <br />
        <br />
        <br/>
       
       
 
<div class="row">
  <div class="col">
  <h1 class="head">BlackCollateral</h1>

  </div>
  <div class="col">
  <div style={{ width: 200, height: 200 }}>
  <CircularProgressbar value={t5} text={count1} maxValue={ti} styles={buildStyles({
      textSize: '8px',textColor:'white',pathColor:'#17a2b8',
  })}/>
</div>
  </div>
</div>
<br/><br/><br/>
<div class="row justify-content-around">
   <div class="col-sm-5 col-ele">
   <text>
     Balance of My Black Token <br/><h4> {tid}</h4></text>

   </div>
   <div class="col-sm-5 col-ele" >
   <text>Number of Transaction in last 24 hours <br/><h4>{con}</h4> </text>

   </div>
   
</div><br/><br/>

<br/>
<br/>
</div>
   {datas.length === 0 ? null : (
       <div>
           <div class="container">
					<h2><b>MY Black Token Transaction History</b></h2>
          
          <br/><br/>

         
               </div>
              
{datas.map((a)=>{
     
	   //console.log(`a`, a)


        return (
          <div>
{ a.timeStamp >= dates ? (
<div class="container-fluid table-responsive">
<table className="table  table-bordered">
          <thead>
          <tr>
      <th scope="col">From</th>
      <th scope="col">To</th>
      <th scope="col">Value</th>
      <th scope="col">TxHash</th>

    </tr>
  </thead>
  <tbody>
  
    <tr>
      <td class="cell">{a.from }</td>
      <td class="cell">{a.to}</td>
      <td class="cell">{a.value}</td>
      <td class="cell">  
           <a class="link" href={"https://testnet.bscscan.com/tx/"+a.hash}>{a.hash}</a>
            </td>
    </tr>
    
  </tbody>
  
</table>



</div>

  ):null }
       </div>
            
           ) 
            
        
      })}

      </div>

)}


      
     <br/>
</div>    
</center>

      </body>
      </div>
      
  );
}

export default NewfileMar;
