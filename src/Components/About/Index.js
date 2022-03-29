

import React from 'react';
import {Creativeinfo,Creativeinfotitle,Creativeinfotitlespan,Creativeinfodir,Creativeinfodesc,Creativeimg,Creativeinfodeschref, Creative} from'./Style.js'



const  About =()=> {
  return (
    <Creative>  
    
    <div className="container">
                           

        <Creativeinfo>
        
       
            <Creativeinfotitle>
          
            <Creativeinfotitlespan>This is</Creativeinfotitlespan> Me</Creativeinfotitle>
            <Creativeinfodir>Creative Director</Creativeinfodir>
            <Creativeinfodesc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est < Creativeinfodeschref href="#">explicabo</Creativeinfodeschref> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
            </Creativeinfodesc>
            <Creativeinfodesc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
            </Creativeinfodesc>
        </Creativeinfo>
    
    </div>
    </Creative>
  );
  
}

export default About;
