
import React  from 'react';
import {Homeg,Homeinformation,Hometitle,Homeinfo,Homedesc,Homedescspan,Homebtn} from'./Style.js'

const  Home =()=> {
  return (
    <Homeg>
            <div className="container">
                <Homeinformation>
                    <Hometitle>Hamza Nabil</Hometitle>
                    <Homeinfo>Creative Director</Homeinfo>
                    <Homedesc>
                        Iam a professional <span>UX Designer</span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </Homedesc>
                    <Homebtn>Let's Begin</Homebtn>
                </Homeinformation>
            </div>
        </Homeg>
        
  );
  
}

export default Home;