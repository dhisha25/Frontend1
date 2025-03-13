import "../project/sms5.css";
import React, { Component } from "react";
import { Icon } from '@iconify/react';
import student from "../images/student.jpg";
export default class Student4 extends Component  {
    constructor(props){
        super(props);
        this.state={
            
        }}
        render(){
            return (
                <div>
                     <nav class="navbar navbar-expand-sm bg-light navbar-dark fixed-top" style={{position:"fixed"}}>
    
    <div class="nv">
  <h1>CUVETTE</h1>
  </div>
  <br></br>
  <br></br>
  <ul class="navbar-nav">
        <li class="nav-item">
          <a href="/sms5"><h6>Are you a student?</h6></a>
        </li>
        </ul>
        <br></br>
        <br></br>
   {/* <a href="#"><h5>Contact</h5></a> */}
   <form class="d-flex">
      <div className="s">
      <a href="/sms"><button class="btn btn-light" type="button"><h5>sign up</h5></button></a>
      </div>
         <a href="/sms"> <button class="btn btn-primary" type="button"><h5>Login</h5></button></a>
          
        </form>
        </nav>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1 className="in">Get in touch</h1>
        <h6>Corporate office : Suite No.1169, 39, NGEF Lane, Indiranagar, Bangalore, Karnataka, 560038</h6>
        <div className="n">
                    <label for="name"><h4>Name:</h4></label>
                    <br></br>
                    
      <input type="name"   placeholder="Your Name" value={this.state.name} onChange={(e) =>
                        this.setState({ name: e.target.value })
                      }/>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="ea2">
                    <label for="email"><h4>Email Adderss:</h4></label>
                    <br></br>
                    
      <input type="email"   placeholder="Enter Email Address" value={this.state.email} onChange={(e) =>
                        this.setState({ email: e.target.value })
                      }/>
                    </div>
                    <br></br>
                    <br></br>
                     <div className="mobile number">    
            <label for="mobile number"><h3>Mobile Number:</h3></label>
                    <br></br>
                    
      <input type="mobile number"   placeholder="Enter Your Mobile Number" value={this.state.number} onChange={(e) =>
                        this.setState({ number: e.target.value })
      }/>
      <br></br>
      <br></br> 
     </div>
     <br></br>
                    
                     <div className="message">    
            <label for="message"><h3>Your message:</h3></label>
                    <br></br>
                    
      <input type="message"   placeholder="Type Your Message" value={this.state.message} onChange={(e) =>
                        this.setState({ message: e.target.value })
      }/>
      <br></br>
      <br></br> 
      </div>
      <buuton class="btn btn-primary">send message</buuton>

                </div>
            )}}