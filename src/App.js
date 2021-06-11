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
<<<<<<< HEAD
 
=======
>>>>>>> cef8ab11bb8f43455da9f6419b0fdb4c4b320694
        
   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous"/>

   <div>
   <Router>
     <Navbar className="bg">
     <Navbar.Brand href="#">
 
   
<<<<<<< HEAD
   <Link class="navlink"  exact to="/Black">

BlackCollateral Page 

</Link>
 
 <Link class="navlink"  exact to="/vault">
Burn Vault{' '}
       </Link>

 
=======
   <Link class="navlink"  exact to="/h">

Deploy 

</Link>
 
 <Link class="navlink"  exact to="/t">
Vault{' '}
       </Link>


>>>>>>> cef8ab11bb8f43455da9f6419b0fdb4c4b320694
</Navbar.Brand>
<Navbar.Collapse className="justify-content-end">


 </Navbar.Collapse>
 </Navbar>
     <Switch>
<<<<<<< HEAD
<Route exact path='/Black' component={Black}/>
<Route exact path='/vault' component={Vault}/>
=======
<Route exact path='/h' component={Black}/>
<Route exact path='/t' component={Vault}/>
>>>>>>> cef8ab11bb8f43455da9f6419b0fdb4c4b320694
 
</Switch>

</Router>

<<<<<<< HEAD




=======
>>>>>>> cef8ab11bb8f43455da9f6419b0fdb4c4b320694
</div>
</div>
  );
}

export default App;
