import logo from './logo.svg';
import './App.css';
//import vabi from "./vault.js";
import React, { useState,useEffect } from "react";
import web3 from './web3';
import token from './token.js';


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

let account =  web3.eth.getAccounts();

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




}
useEffect(()=>{bal()},[con])



// usage





  return (
    
    <div style={{backgroundColor:"white"}}> 

     <body  >
        
<center>
      <div style={{backgroundColor:"white"}}>
        <br />
        <br />
       <h1>BlackCollateral</h1>
       <br /><br />
		 <text><i>Balance of My Black Token: <b> {tid}</b></i></text>
   <br/><br/><br/><br/>
          {lock === true ? (
			 <div>
			 <text><i>Time Left to Unlock my account : <b id = "demo">{t1}h:{t2}m:{t3}s </b></i></text>
			 </div>
			 ):(
			 <div>
			 <text>No Lock</text>
			 </div>
			 )
			 }
 

   <br/><br/><br/><br/>

             <text>Number of Transaction in last 24 hours ===> {con}</text>
  <br/><br/><br/><br/>
   {datas.length === 0 ? null : (
       <div>
           <div>
					<h2><b>MY Black Token Transaction History</b></h2>
           <table >
                 <tbody>
                   <tr>
                       <td>From</td>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       <td>To</td>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;				  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       <td>Value</td>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       <td>TxHash</td>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   </tr>
                   </tbody>
               </table>
               </div>
{datas.map((a)=>{
     
	   //console.log(`a`, a)


        return (
          <div>
{ a.timeStamp >= dates ? (
<div>
              <table >
      <tbody>
          
        <tr>
            
          <td>
            <h6>{a.from }</h6>
            
          </td>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <td>
            <h6>{a.to}</h6>
            
          </td>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <td>
            <h6>{a.value}</h6>
            
          </td>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <td>
            <h6>
           <a href={"https://testnet.bscscan.com/tx/"+a.hash}>{a.hash}</a></h6>
            
          </td>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </tr>
      </tbody>
    </table>
</div>  ):null }
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
