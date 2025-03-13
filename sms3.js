import "../project/sms3.css";
import React, { Component } from "react";
import { Icon } from '@iconify/react';
import student from "../images/student.jpg";
export default class Student2 extends Component  {
    constructor(props){
        super(props);
        this.state={
            
        }}
        render(){
            return (
                <div>
                  <br></br>
                  <br></br>
                  <table class="table table-bordered">
    <thead>
      <tr>
        <th rowSpan={7}>S.no</th>
        <th>Name</th>   
        <th>E.mail Adress</th> 
        {/* <th>Date Of Birth</th>
        <th>Age</th>  */}
        <th>Mobile Number</th>
        <th>College/University Name</th>    
        <th>Year of Graduation</th>
      </tr>
    </thead>
    <tbody>
      <tr 
      class="table-light">
        <td>1</td>
        <td>John</td>  
        <td>john20082@gmail.com</td> 
        {/* <td>23/05/2006</td>
        <td>18</td> */}
        <td>8215521558</td> 
        <td>IIT Madras-Indian Institute of Technology</td> 
        <td>2027</td>
      </tr>
      <tr 
      class="table-light">
        <td>2</td>
        <td>Mary</td>
        <td>mary2337@gmail.com</td>
        {/* <td>17/12/2005</td>
        <td>19</td>  */}
        <td>6656232658</td>
        <td>SRM Institute of Science and Technology</td>  
        <td>2026</td>
      </tr>
      <tr
      class="table-light">
        <td>3</td>
        <td>Dooley</td>
        <td>dolley18873@gamil.com</td>
        {/* <td>09/08/2006</td>  
        <td>18</td>    */}
        <td>2154813551</td>
        <td>SSN college of Engineering</td>
        <td>2027</td>
      </tr>
      <tr
      class="table-light">
        <td>4</td>
        <td>Dhisha</td>
        <td>dhishsdhisha2006@gmail.com</td> 
        {/* <td>25/04/2006</td>
        <td>18</td>   */}
        <td>9360891180</td> 
        <td>Vel Tech Multi Tech College of Engineering</td> 
        <td>2027</td>
      </tr>
      <tr
      class="table-light">
        <td>5</td>
        <td>Deepika</td>
        <td>deepika2032@gmail.com</td> 
        {/* <td>22/05/2006</td>
        <td>18</td>  */}
        <td>8555265256</td> 
        <td>Panimalar College of Engineering</td>  
        <td>2027</td>
      </tr>
      <tr
      class="table-light">
        <td>6</td>
        <td>Joshna</td>
        <td>Joshna2034@gmail.com</td> 
        {/* <td>25/03/2004</td>
        <td>20</td>  */}
        <td>7815452465</td> 
        <td>Saveetha College of Engineering</td>  
        <td>2024</td>
      </tr>
      <tr
      class="table-light">
        <td>7</td>
        <td>Janani</td>
        <td>Janani47778@gmail.com</td>
        {/* <td>07/11/2007</td>
        <td>17</td> */}
        <td>5486181557</td>
        <td>Sathyabama Institute of Science and Technology</td>
        <td>2028</td>
      </tr>
    </tbody>
  </table>
                </div>
      
                
            )
        }}