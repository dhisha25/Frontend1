import "../project/sms.css";
import React, { Component } from "react";
import { Icon } from '@iconify/react';
import student from "../images/student.jpg";
export default class Student extends Component  {
    constructor(props){
        super(props);
        this.state={
          email: '',          // To store entered email
          password: '',       // To store entered password
          responseData: null, // To store API response
          error: null, 

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);}
        handleChange(event) {
          const { name, value } = event.target;
          this.setState({ [name]: value });
        }
      
        // handleSubmit = async (event) => {
        //   event.preventDefault();
      
        //   const { email, password } = this.state;
      
        //   if (email != '' || password != '') {
           

        //    this.setState({ error: 'Email and Password are required' });
        //    return;
        //   };
        
      
        //   try {
        //     let response = await fetch('http://localhost:5000/login', {
        //       method: 'POST',
        //       headers: {
        //         'Content-Type': 'application/json',
        //       },
        //       body: JSON.stringify({ email, password })
        //     });
      
        //     let data = await response.json();
      
        //     if (response.ok) {
        //       alert('Login successful');
        //       this.setState({ error: '' }); // Clear error if login is successful
        //     } else {
        //       this.setState({ error: data.message });
        //     }
        //   } 
        //   catch (err) {
        //      this.setState({ error: 'An error occurred' });
        //    }
        // };
        handleSubmit(event) {
          event.preventDefault(); // Prevent default form submission
      
          const { email, password } = this.state;
      
          // Data to send
          const data = {
            title: 'New Post',
            body: 'This is a new post content.',
            userId: 1,
            email, // Using email from state
            password, // Using password from state
          };
      
          fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
            .then((response) => response.json())
            .then((data) => {
              // Updating state with response data
              this.setState({ responseData: data, error: null });
            })
            .catch((error) => {
              // Updating state with error message
              this.setState({ error: error.message, responseData: null });
            });
        }
      
      
        // handleChange = (event) => {
        //   this.setState({ [event.target.name]: event.target.value });
        // };
        
        
        render(){
          const { email, password, error,responseData } = this.state;
            return (
                <div>
               <div className="row">
            
                <div className="col">
                    {/* <br></br>
                    <br></br>
                    <br>
                    </br>
                    <br></br>
                    <div className="login-container">
              <h1>Sign In</h1>
              <form onSubmit={this.handleSubmit}>
                <label>
                  Email:
                  <br></br>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                  />
                </label>
                <br></br>
                <br></br>
                <label>
                  Password:
                  <br></br>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                  />
                </label>
                <br></br>
                <br></br>
              {/* <button type="submit" > <a href="/sms6">Login</a> </button>
                 {error && <p className="error">{error}</p>}  */}
                  {/* <button onClick={this.handleSubmit}>Submit</button>
        {responseData && <div>Response: {JSON.stringify(responseData)}</div>}
        {error && <div style={{ color: 'red' }}>Error: {error}</div>}
                 
              </form>
            </div> */}
                  
            {/* <div className="wg"> */}
                {/* <br></br>
                <br></br>
                <a href="/sms6"><button>Submit</button></a>
            </div> */} 
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              required
            />
          </div>
          <br></br>
     

          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              required
            />
          </div>
          <br></br>
          <br></br>
      
          <button type="submit"><a href="/sms6">Submit</a></button>
        </form>

        {responseData && <div>Response: {JSON.stringify(responseData)}</div>}
        {error && <div style={{ color: 'red' }}>Error: {error}</div>}
      </div>
            <div className="na">
                <br></br>
                <br></br>
                <h3>New to cuvette?<a href="/sms3">Create an account</a></h3>
                <div class="lc">
              <a href="https://github.com/dhisha25" target="_blank">
                <Icon
                  icon="ri:github-fill"
                  style={{ color: "#000000" }}
                  className="icon1"
                />
              </a>
              &nbsp;&nbsp;
              <a href="https://www.linkedin.com/in/dhisha-pandian-702a57293/" target="_blank">
                <Icon
                  icon="ri:linkedin-fill"
                  style={{ color: "#000000" }}
                  className="icon2"
                  />
                  </a>
                  </div>
              
                </div>
                
            </div>
             <div className="col">
                <div className="im">
                    <br></br>
                    <br></br>
             <img src={student}></img>
             </div>
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
            
        }}
