import "../project/sms9.css";
import React, { Component } from "react";
import us from "../images/us.jpeg";
import { Icon } from '@iconify/react';
import student from "../images/student.jpg";
export default class Student8 extends Component  {
    constructor(props){
        super(props);
        this.state={
            count:0,
         email:"",
         password:"",
         gender:"",
         username:""
        }}
        render(){
            return (
                <div class="row">
                    <div class="col-md-6 mb-6">
                    <h1 className="ep">Edit Profile</h1>
                    <br></br>
                    <h4 className="ep">Your full name?*</h4>
                    <br></br>
                    
                    
      <input  placeholder="Enter Your name" className="form-control"
                      />
                      <br></br>
                      
                      <h4 className="ep">Q.Which domain are you interested in working?add upto 3</h4>
                    <br></br>
                    
                    
      <input  placeholder="Type Domain" className="form-control"
                      />
                      <br></br>
                
                       <h4 className="ep">Q.College/University name?</h4>
                    <br></br>
                    
                    
      <input  placeholder="Enter Your College name" className="form-control"
                      />
                      <br></br>
                      
               <h4 className="ep">Q.Year of graduation</h4>
                    <br></br>
                    
      <input  placeholder="Enter Your Year of Graduation" className="form-control"
                      />
                      <br></br>
                      
                      <h4 className="ep">Q.Your Github profile link?</h4>
                    <br></br>
                    
                    
      <input  placeholder="Enter Your Github profile link" className="form-control"
                      />
                      <br></br>
                      
                       <h4 className="ep">Your Linkedin profile link?</h4>
                    <br></br>
                    
      <input  placeholder="Enter Your Linkedin profile link" className="form-control"
                      />
                      <br></br>
                      
            <h4 className="ep">Add Your profile of social platforms</h4>
                    <br></br>
                    
      <input  placeholder="Select platform" className="form-control"
                      />
                    <h4 className="ep"></h4>
                    <br></br>
                    <h4 className="ep">Q.Select Your hometown State</h4>
                    <br></br>
                    
                    
      <input  placeholder="Select Your hometown State" className="form-control"
                      />

                      <br></br>
                      <br></br>
                     
                      <br></br>
                


                </div>
                <br></br>
                <br></br>
                <div class="col-md-6 mb-6">
                <div class="card">
                <img src={us} className="us"></img>
                <br></br>

                    <h5>Add a nice profile picture</h5>
                    <br></br>
                    <h6>Should be less than 2MB</h6>
                    <br></br>
                    <button className="btn btn-info" type="file"><h4>Upload picture</h4></button>
                </div>

                </div>
                </div>
            )
        }}