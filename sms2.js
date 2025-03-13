import "../project/sms2.css";
import React, { Component } from "react";
import student from "../images/student.jpg";
export default class Student1 extends Component  {
    constructor(props){
        super(props);
        this.state={
            
        }}
        render(){
            return (
                <div className="row">
                  <div className="col">
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                     <h6 className="fp1">Forgetten Password?</h6>
                     <div className="ea1">
                        <br></br>
                        <br></br>
                     <label for="email"><h4>Email Address:</h4></label>
                    <br></br>
                    
      <input type="email"   placeholder="Enter email" value={this.state.email} onChange={(e) =>
                        this.setState({ email: e.target.value })
                      }/>
                     </div>
                     
                    
                     
                     <div className="get">
                        <br></br>
                        
                        <a href="#"><button class="btn btn-primary">Get Reset Link</button></a>
                    

                    
                     </div>
                     <div className="go">
                        <br></br>
                        
                        <a href="/sms"><button class="btn btn-light">Go Back</button></a>
                     </div>
                     </div>
                     <div className="col">
                     
                <div className="im">
                    <br></br>
                    <br></br>
             <img src={student}></img>
             </div>
             </div> 
             <div>
  <nav class="navbar navbar-expand-sm bg-light navbar-dark fixed-top" style={{position:"fixed"}}>

  <div class="nv">
<h1>CUVETTE</h1>
</div>
<ul class="navbar-nav">
      
      <li class="nav-item">
 <a href="/sms5"><h5>Contact</h5></a>
 </li>
 </ul>
 </nav>
 </div>
 </div>
   
        
      
      
      
  
                     

                   
            
              
            )
        }
    }