

import React  from 'react';
import {Link} from 'react-router-dom';
import {NavbarSection,Logo,Logotext,Ullist,Listitem,Listitema,} from'./Style.js'

const  Navbar =()=> {
  return (
    
        <NavbarSection>
            
            <div className="container">
                
                <Logo>
                    <Logotext>Ultra Profile</Logotext>
                </Logo>
                
                
                
                <Ullist>
                    <Listitem><Link to="/">Home</Link></Listitem>
                    <Listitem><Listitema href="#">Work</Listitema></Listitem>
                    <Listitem><Listitema href="#">Portfolio</Listitema></Listitem>
                    <Listitem><Listitema href="#">Resume</Listitema></Listitem>
                    <Listitem><Listitema href="#">About</Listitema></Listitem>
                    <Listitem><Link to="/contact">Contact</Link></Listitem>
                </Ullist>
                
            </div>
            
        </NavbarSection>
  );
  
}

export default Navbar;
