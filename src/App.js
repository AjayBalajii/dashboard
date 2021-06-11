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


function App() {

      

  
  return (
     
   <div class="bg-dark">
        
   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous"/>

   <div>
   <Router>
     <Navbar className="bg">
     <Navbar.Brand href="#">
 
   
   <Link class="navlink"  exact to="/black">

Blackcollateral Page

</Link>
 
 <Link class="navlink"  exact to="/vault">
Burn Vault{' '}
       </Link>


</Navbar.Brand>
<Navbar.Collapse className="justify-content-end">


 </Navbar.Collapse>
 </Navbar>
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
