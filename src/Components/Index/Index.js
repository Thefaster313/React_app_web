

import React , {Component} from 'react';

import About from './../About/Index.js';
import Footer from './../Footer/Index.js';
import Home from './../Home/Index.js';
import Portfolio from './../Portfolio/Index.js';
import Profile from './../Profile/Index.js';
import SocailMedia from './../SocailMedia/Index.js';
import Work from './../Work/Index.js';
import { Link } from 'react-router-dom';
class Index extends Component {
  render (){return (
    <div>
    

    
    
      <Home/>
      <Portfolio/>
      <Profile/>
       <Work/>
      <About/>
     
      <SocailMedia/>
      <Footer/>
     
    </div>
  );}
  
}

export default Index;
