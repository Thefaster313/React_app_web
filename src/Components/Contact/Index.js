
import React  from 'react';
import {Drop,Droptitle,Droptitlespan,Dropform,DropText,DropEmail,Dropforminput, DropSub,DropSubmit,DropTextare} from'./Style.js'


const  Contact =()=> {
  return (
    <Drop>
    <div className="container">
        <Droptitle><Droptitlespan>Drop </Droptitlespan>Me A line</Droptitle>
        <Dropform action="">
            <Dropforminput>
                <DropText type="text" placeholder="Your Name"/>
                <DropEmail type="email" placeholder="Your Email"/>
            </Dropforminput>
            <DropSub type="text" class="sub" placeholder="Your Subject"/>
            <DropTextare cols="30" rows="10" placeholder="Your Message"></DropTextare>
            <DropSubmit type="submit" value="Send Message"/>
        </Dropform>
    </div>
</Drop>
  );
  
}

export default Contact;