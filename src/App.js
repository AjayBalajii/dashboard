import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import web3 from './web3';
//import token from './token.js';
import Black from './black.js';
import {BrowserRouter as Router , Route , Link , Switch } from "react-router-dom";
//import history from "./utils/history";
//import vault from './vault.js';
import { Navbar } from 'react-bootstrap';
//import { Button,ButtonGroup } from 'react-bootstrap';
//import sidebar from './sidebar';
import { slide as Menu } from 'react-burger-menu';
//import Terms from './terms';
function App() {
   const[a,seta]=useState("");

   useEffect(()=>{bal()});
   const bal = async() => {

   let account = await web3.eth.getAccounts();
   seta(await web3.eth.getAccounts());
  
   }
   const connect = async() => {
      window.ethereum.enable();
     // let account = await web3.eth.getAccounts();
     
   //document.getElementById("cc").style.visibility="hidden";
  // document.getElementById("cc").style.visibility="hidden";
   //window.location.reload();
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
            a!=0?((
               <div>
                          <button id="cc1" class="btn-flat  btn-bloc cc1"  >{a}</button>


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
<Route exact path='/' component={Black}/>

</Switch>

</Router>



</div>
</div>

  );
}


export default App;
