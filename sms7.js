import "../project/sms7.css";
import React, { Component } from "react";
import student from "../images/student.jpg";
export default class Student6 extends Component  {
    constructor(props){
        super(props);
        this.state={
    
            email:"", 
            setEmail:"",
            password:"",
             setPassword:"",
             mobilenumber:"",
            error:"",
            setError:"",
            response:"",
            dtaa:"",
            handleSubmit:""
            
        }}
        handleSubmit = async (event) => {
            event.preventDefault();
        
            const { email, password, mobilenumber } = this.state;
        
            if (email === '' || password === ''||mobilenumber === '') {
              this.setState({ error: 'Email,Password and mobilenumber are required' });
              return;
            }
        
            try {
              let response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password,mobilenumber })
              });
        
              let data = await response.json();
        
              if (response.ok) {
                alert('Login successful');
                this.setState({ error: '' }); // Clear error if login is successful
              } else {
                this.setState({ error: data.message });
              }
            } catch (err) {
              this.setState({ error: 'An error occurred' });
            }
          };
        
          handleChange = (event) => {
            this.setState({ [event.target.name]: event.target.value });
          };
        
        render(){
            const { email, password, mobilenumber,error } = this.state;
            return (
                <div>
                    <h2> Complete these steps to apply in internships</h2>
                    <br></br>
                    <div className="seven">
                    <div className="login-container">
              {/* <h2>Login</h2> */}
              <form onSubmit={this.handleSubmit}>
                <label>
                  Email:
                  <br></br>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
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
                    className="form-control"
                    value={password}
                    onChange={this.handleChange}
                  />
                </label>
                <br></br>
                <br></br>
                <label>
                  Mobile Number:
                  <br></br>
                  <input
                    type="mobilenpmber"
                    name="mobilenumber"
                    className="form-control"
                    value={mobilenumber}
                    onChange={this.handleChange}
                  />
                </label>
                <br></br>
                <br></br>
                {/* <button type="submit">Login</button>
                {error && <p className="error">{error}</p>} */}
              {/* </form>
            </div>
            </div> */}
                    
      <br></br>
      
                      <h4 className="al">3 attempt left</h4>
                      <br></br>
                      <br></br>


                      


                    
                    
                    <h3 className="two">3.Complete Your Profile</h3>
                    <br></br>
                    <h5 className="one">
                    Atleast 1 project or 1 poisition of Responsibility or Work Experience
                    </h5>
                    

             <h5 className="one">Atleast 1 Education</h5>
                     <h5 className="one">Atleast 1 skill</h5>
                     <br></br>
                     <button type="submit">Login</button>
                {error && <p className="error">{error}</p>}
                </form>
            </div>
            </div>
            <br></br>
            <br></br>
                     <a href="/sms9"><h4 className="uf">Upload Files</h4></a>
                     
                     <br></br>
                     <button className="btn btn-light"><a href="/sms3"><h4>Update Now</h4></a></button>
                     {/* <br></br> */}
                     {/* <a href="#"><h4 className="uf">Upload Files</h4></a> */}
                     

                </div>
            )}}