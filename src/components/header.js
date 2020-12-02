import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import {Redirect} from 'react-router'; 
 
class Header extends React.Component {
    
    
    render() {
        
        return (
            <>
            <header>
             
            <div className="logo-section1">
            <img className="logo1" src="assets/img/Earth-Recycler-Logo.png"/>
            </div>
            <div class="menudis">
            <nav class="navigation">
            <ul class="nav-list">
              
                <div class="dropdown">
                <div class="yass4">
                <li><a href="#"><i class="fa fa-bars"></i></a><div class="dropdown-content">
                <a href="/">HOME</a>
               <a href="/#secst">ABOUT</a>
               <a href="/servmob">SERVICES</a>
                
        
                
        
              
              





            
              
              

             
            
              <a href="/cos">CONSULTANCY</a>
              <a href="/login">LOGIN</a>
              <a href="/con">CONTACT US</a>
                <a href="/care">CAREERS</a>
                
              </div></li></div> </div> </ul>
              </nav>
              </div>
              




            


            
            
            
            
            
           




           
             
            <div className="logo-section">
            <img className="logo" src="assets/img/Earth-Recycler-Logo.png"/>
            </div>
                    <nav class="navigation">
                        <ul class="nav-list">
                            <li><a class="active" href="/">HOME</a></li>
                            <li><a href="/#secst">ABOUT</a></li>
                            <div class="dropdown">
                            <li><a href="/servmob">SERVICES<i class='fa fa-caret-down'></i></a><div class="dropdown-content">
                            <a href="/inter">Intergrated Waste Management</a>
                           <a href="/off">Off Site Waste Management</a>
                          <a href="/wet">Wet Waste Management</a>
                          <a href="/rec">Recyclable Waste Management</a>
                          <a href="/rej">Reject Waste Management</a>
                          <a href="/epr">EPR</a>
                            <a href="/biomin">Biomining</a>
                            <a href="/zero">Zero Waste Events</a>
                            <a href="/prd">Products</a>
                          </div></li></div>
                          
                          <div class="dropdown">
                            <li><a href="/cos">CONSULTANCY<i class='fa fa-caret-down'></i></a>

                            <div class="dropdown-content">
                            <a href="/swm">SWM Rules</a>
                            <a href="/wasteau">Waste Audits</a>
                           
                            <a href="/man">Management & Protection</a>
                            <a href="/train">Training and Awareness</a>
                            <a href="/detail">Detailed Project Report</a>
                        </div></li></div>
                            
                            <li><a href="/login" class="a-btn">LOGIN</a></li>
                            <li><a href="/con" class="a-btn">CONTACT US</a></li>
                            <li><a href="/care" class="a-btn">CAREERS</a></li>
                            
                            
                        </ul>
                    </nav>
                    
                </header>
                
            </>
        );
    }
}
export default Header;        