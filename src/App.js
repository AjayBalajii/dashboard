import logo from './logo.svg';
import './App.css';
import vabi from "./vault.js";
import React, { useState,useEffect } from "react";
import web3 from './web3';
import token from './token.js';
import Black from './black.js';
import Vault from './Vaultpage.js';
import {BrowserRouter as Router , Route , Link , Switch , NavLink} from "react-router-dom";
//import history from "./utils/history";
import vault from './vault.js';
import { Navbar } from 'react-bootstrap';
import { Button,ButtonGroup } from 'react-bootstrap';
import sidebar from './sidebar';
import { slide as Menu } from 'react-burger-menu';

function App() {
   const connect = async() => {
      window.ethereum.enable();
      let account = await web3.eth.getAccounts();
     
   //document.getElementById("cc").style.visibility="hidden";
   document.getElementById("cc").style.visibility="hidden";
   }
      

  
  return (
     
   <div class="App">
        
   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous"/>

   <div>
   <button id="cc" class="btn btn-info btn-bloc" style={{marginLeft:"800px"}} onClick={connect}>connect wallet</button>
        <button id="cc1" class="btn btn-info btn-bloc" style={{marginLeft:"800px"}} ></button>


   <Router>
   <Menu>
   <Link class="navlink"  exact to="/black">

Blackcollateral Page

</Link>
 
 <Link class="navlink"  exact to="/vault">
Burn Vault{' '}
       </Link>
    </Menu>



     <Switch>
<Route exact path='/black' component={Black}/>
<Route exact path='/vault' component={Vault}/>
 
</Switch>

</Router>



</div>
</div>

  );
}


export default App;
