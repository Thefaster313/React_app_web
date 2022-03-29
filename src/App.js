
import './App.css';
import ReactDOM from "react-dom";
import React , {Component} from 'react';
import Navbar from './Components/Navbar/Index.js';
import Index from './Components/Index/Index.js';
import Contact from './Components/Contact/Index.js';
import {BrowserRouter,Route,Routes,Switch} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './Components/Home/Index';
import About from './Components/About/Index';

class App extends Component {
  render (){return (
    
    
     <div>
       <Navbar/>
       <Routes>
 
    
    <Route  path="/" exact element= { <Index/>} />
    <Route  path="/contact" exact element= { <Contact/>} />
      
     
   
    
    </Routes>
      
      
      

     </div>
     
      
  
     
  
    
  );}
  
}

export default App;
