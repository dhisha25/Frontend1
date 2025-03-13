import "../project/sms.css";
import React, { Component } from "react";
import { Icon } from '@iconify/react';
import student from "../images/student.jpg";
export default class Student5 extends Component  {
    constructor(props){
        super(props);
        this.state={
            count:0,
        collegename:"",
        yearofgraduation:"",
        isLoggedIn: false,

        }}
        render(){
            return (
                <div>
                     <div class="row">
  <nav class="navbar navbar-expand-sm bg-light navbar-dark fixed-top" style={{position:"fixed"}}>
    
  <div class="nv">
    <div class="col">
<h1>CUVETTE</h1>
</div>
</div>
<ul class="navbar-nav">
      <div class="col">
<button className="btn btn-light">Coins10</button>
<button className="btn btn-primary"> DP DHISHA PANDIAN</button>

</div>
 </ul>
 </nav>
 </div>
 <br></br>
 <br>
 </br>
<br></br>

<div className="hi">
<h4>Hi,DHISHA PANDIAN</h4>
<h5>Welcome to Cuvette.Let's get started up your profle</h5>
<br></br>
<a href="/sms7"><button className="btn btn-primary">Get started</button></a>
</div>
<br></br>

 <div className="row">
 <div className="col">
                <br></br>
                <br></br>
            
                
            <label for="collegename"><h3>Q.college/University name?</h3></label>
                    <br></br>
                    
      <input type="collegename" class="form-control"  placeholder= "Type college name" 
      />

            </div>
    
                <br></br>
                <br></br>
            
               <div className="pw"> 
                <br></br>
                <br></br>
            <label for="Yearofgraduation"><h3>Q.Year of graduation?</h3></label>
                    <br></br>
                    
      <input type="Yearofgraduation" class="form-control" placeholder= "Select Graduation Year"
      />
</div>
            </div>
        
        
            
            
            
                <div className="col">
                <br></br>
                <br></br>
            
                
            <label><h3>Q.Which domain are you interested in working?add upto 3</h3></label>
                    <br></br>
                
      <input   placeholder= "Type Domain" class="form-control"
      />

            
           

           
            <br></br>
                <br></br>
                <br></br>
            
                
            <label><h3>Q.Select Your hometown state?</h3></label>
                    <br></br>
                    
                    
      <input   placeholder= "Select your hometown state" class="form-control"
      />

            
            </div>
            
            


            
                </div>
                
            )}}