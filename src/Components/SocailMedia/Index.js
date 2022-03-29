
import React, { Component }  from 'react';
import {Socialmedia,Socialmediasocial,Socialface,Socialtwitter,SocialPin,SocialIcon,Socialp, Socialspan,Socialspaninfo2} from'./Style.js'
import axios from 'axios';


class SocailMedia extends Component{
    state={
        socialmedia:[]
    }
    componentDidMount(){
        axios.get('js/data.json').then(res=> {this.setState({socialmedia:res.data.social})}    )
    }
    render(){
        const{socialmedia}=this.state;
    const socialmediaList=socialmedia.map((socialmediaItem)=>{
        return(
         
          
       <Socialmediasocial item={socialmediaItem.id} key={socialmediaItem.id}>
                
       <SocialIcon className={socialmediaItem.icon}></SocialIcon>
       
       <Socialp>
           <Socialspan>{socialmediaItem.title}</Socialspan>
           <Socialspaninfo2>{socialmediaItem.body}</Socialspaninfo2>
           </Socialp>
           
   </Socialmediasocial>
        )
    })

        
        
        return (
        <Socialmedia>
   
        {socialmediaList}
        
        
        
    </Socialmedia>
      );
      
    }
  
}

export default SocailMedia;