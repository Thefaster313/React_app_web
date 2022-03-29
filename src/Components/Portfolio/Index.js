
import axios from 'axios';
import React,{useState,useEffect, Component}  from 'react';
import {Portfoliog,Portfoliotitle,Portfolioitemac,Portfoliospan,Portfoliolist,Portfolioitem,Portfoliobox,Portfolioimg,Portfoliooverlay,Portfoliooverlayspan,Portfolioimgwrapper} from'./Style.js'


class  Portfolio extends Component {
  state={
    portfolio:[]
}
componentDidMount(){
    axios.get('js/data.json').then(res=> {this.setState({portfolio:res.data.portfolio})}    )
}
render (){
    const{portfolio}=this.state;
    const portfolioList=portfolio.map((portfolioItem)=>{
        return(
          <Portfolioimgwrapper key={portfolioItem.id}>
          <Portfolioimg src={portfolioItem.image}alt=""/>
          <Portfoliooverlay>
              <Portfoliooverlayspan>
                  Show Image
              </Portfoliooverlayspan>
          </Portfoliooverlay>
      </Portfolioimgwrapper>
        )
    })



  return (
    <Portfoliog>
            <Portfoliotitle><Portfoliospan>My</Portfoliospan> Portfolio</Portfoliotitle>
            <Portfoliolist>
                <Portfolioitemac>All</Portfolioitemac>
                <Portfolioitem>HTML</Portfolioitem>
                <Portfolioitem>Photoshop</Portfolioitem>
                <Portfolioitem>Wordpress</Portfolioitem>
                <Portfolioitem>Mobile</Portfolioitem>
            </Portfoliolist>
            
            <div className="box">
                
                {portfolioList}
               
               
                
                </div >
            
        </Portfoliog>
  );
  
}}

export default Portfolio;