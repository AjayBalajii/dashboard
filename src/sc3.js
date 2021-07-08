import React from 'react';
import "./App.css";
import web3 from './web3';
import token from './token.js';


function Sc3(){
    const approve = async() => {
        let account = await web3.eth.getAccounts();
        await token.methods.approve("0x4783aD97Df0C00C2ef8305F94885bA0Ff7c20547",1000000000000000).send({from:account[0]});
      }

    return(
        <div class="check"  style={{backgroundColor:"#0000 " ,padding:"20px", borderRadius:"20px"}}>
<br/>
<br/>
<br/>
<h4>Before Stake we should Approve first</h4><br/>
<button class="btn btn-info" id="apbtn" onClick={approve}>Approve</button><br/>

<br/>
<br/>

</div>
    );
}
export default Sc3;