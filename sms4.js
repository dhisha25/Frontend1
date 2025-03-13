import "../project/sms4.css";
import React, { Component } from "react";
import { Icon } from '@iconify/react';
import student from "../images/student.jpg";
export default class Student3 extends Component  {
    constructor(props){
        super(props);
        this.state={
          email:"", 
          setEmail:"",
          password:"",
           setPassword:"",
          error:"",
          setError:"",
          response:"",
          dtaa:"",
          handleSubmit:""

      
        }}
        handleSubmit = async (event) => {
          event.preventDefault();
      
          const { email, password } = this.state;
      
          if (email === '' || password === '') {
            this.setState({ error: 'Email and Password are required' });
            return;
          }
      
          try {
            let response = await fetch('http://localhost:5000/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email, password })
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
      
        render() {
          const { email, password, error } = this.state;
      
          return (
            <div className="login-container">
              <h2>Login</h2>
              <form onSubmit={this.handleSubmit}>
                <label>
                  Email:
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
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                  />
                </label>
                <br></br>
                <br></br>
                <button type="submit">Login</button>
                {error && <p className="error">{error}</p>}
              </form>
            </div>
          );
        }
      }
      
      