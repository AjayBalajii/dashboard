import './App.css';
import { Modal, Button,InputGroup,FormControl,Nav,NavItem,NavLink,Sonnet,Tab } from "react-bootstrap";
import React, { useState,useEffect,useStyles } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Stepper1 from './stepper';


//import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { render } from '@testing-library/react';
import Tabs from'./tab';
        
   



function stake(){

    
    return(

        
        <div className="App">
<div class="container-fluid">
<div class="row">
    <div class="col-sm-9">
    <Tabs/>
    </div>
    <div class="col-sm-3">
    <div class=" col-ele">Staked<br/><hr style={{height:"0px", width:"90%",margin: "auto"}}/>....</div><br/>
    <div class=" col-ele">Unstaked<br/><hr  style={{height:"0px",width:"90%",margin: "auto"}}/>....</div><br/>
    <div class=" col-ele">Rewards<br/><hr  style={{width:"90%", height:"0px",margin: "auto"}}/>....
    <br/><br/>
    <button class="btn btn-info">Stake</button>&nbsp;
   <button class="btn btn-info">Withdraw</button>


    </div>

    </div>
</div>

</div>
<br/><br/><br/><br/>
    </div>
    
        
    );


}

export default stake;
