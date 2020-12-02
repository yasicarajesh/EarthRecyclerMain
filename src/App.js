import React from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import Home from './components/home';
import Login from './components/login';
import About from './components/about';
import Service from './components/service';
import Tophead from './components/tophead';
import Inter from './components/interwaste';
import House from './components/house';
import Com from './components/commer';
import Indus from './components/indus';
import School from './components/school';
import Offsite from './components/offsite';
import Reject from './components/rejectwas';
import Recycle from './components/recycle';
import Zero from './components/zerowaste';
import Footer from './components/footer';
import Contact from './components/contact';
import Wet from './components/wet';
import Swm from './components/swm';
import Biomin from './components/biomin';
import Prd from './components/prd';
import Epr from './components/epr';
import Cos from './components/consul';
import Wastea from './components/wasteau';
import Man from './components/man';
import Train from './components/train';
import Detail from './components/detail';
import Care from './components/car';
import Servmob from './components/servicesmobile';





import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,Redirect
} from "react-router-dom";

class App extends React.Component{
  constructor(props)
  {
    super(props);
    document.addEventListener("scroll",function(){
      console.log(window.pageYoffset);
      var head= document.getElementsByTagName("header")[0];
      if(window.pageYOffset>90){
        head && (head.className="make-header");
      }
      else{
        head && (head.className=" ");
      }})
  }

  

  
  render(){
    return(
      <>
      
      
      <Router>
      <div>
       <Header/>
        <Route exact path="/login"><Login/><Footer/></Route>
        <Route exact path="/"><Home/><About/><Service/><Footer/></Route>
        <Route exact path="/about"><About/><Service/><Footer/></Route>
        <Route exact path="/inter"><Inter/><Footer/></Route>
        <Route exact path="/house"><House/><Footer/></Route>
        <Route exact path="/commer"><Com/><Footer/></Route>
        <Route exact path="/indus"><Indus/><Footer/></Route>
        <Route exact path="/sch"><School/><Footer/></Route>
        <Route exact path="/off"><Offsite/><Footer/></Route>
        <Route exact path="/rej"><Reject/><Footer/></Route>
        <Route exact path="/rec"><Recycle/><Footer/></Route>
        <Route exact path="/zero"><Zero/><Footer/></Route>
        <Route exact path="/con"><Contact/><Footer/></Route>
        <Route exact path="/wet"><Wet/><Footer/></Route>
        <Route exact path="/swm"><Swm/><Footer/></Route>
        <Route exact path="/biomin"><Biomin/><Footer/></Route>
        <Route exact path="/prd"><Prd/><Footer/></Route>
        <Route exact path="/epr"><Epr/><Footer/></Route>
        <Route exact path="/cos"><Cos/><Footer/></Route>
        <Route exact path="/wasteau"><Wastea/><Footer/></Route>
        <Route exact path="/man"><Man/><Footer/></Route>
        <Route exact path="/train"><Train/><Footer/></Route>
        <Route exact path="/detail"><Detail/><Footer/></Route>
        <Route exact path="/care"><Care/><Footer/></Route>
        <Route exact path="/servmob"><Servmob/><Footer/></Route>
        





        

        
       
        
      </div>
    </Router>


   </>
    );
  }
}


export default App;
