import logo from './logo.svg';
import './App.css';
import vabi from "./vault.js";
import React, { useState,useEffect } from "react";
import web3 from './web3';
import token from './token.js';
import Black from './black.js';
import Vault from './Vaultpage.js';
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";

function App() {
  
  return (
    <div className="App">
    
     <br/>
<br/>


              <br></br>
<br></br>

      <center>
        <br />
        <br />
       <h1>BURN VAULT</h1>
<button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Black");
                }}>
                Go Deploy Page 
              </button>
<button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Vault");
                }}>
                Go vault Page 
              </button>

       <br /><br />
        <div >
<br />
<br /><br />


<div>         


    </div> 
       
     
        </div>
     <br/>
      </center>

<br></br>
<br></br>



                    
                    

            <Router history={history}>
          <Switch>
            
            <Route path="/Black">
              <Black />
            </Route>
             <Route path="/Vault">
              <Vault />
            </Route>
            
          </Switch>
        </Router>
      
      </div>
  );
}

export default App;
