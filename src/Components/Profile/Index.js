
import React  from 'react';
import {Profileskills,Profileskillsbarparentsp,Profille,Profilelist,Profileitem,Profileskillstitlesp,Profiletitlesp,Profiletitle,Profileskillstitle,Profileitemspan,Profileitemspanweb,Profileskillsbarparent,Profileskills2,Profileskillsdesc, Profileskillsbar, Profileskillsbartitle,Profileskillsbarperc} from'./Style.js'


const  Profile =()=> {
  return (
    <Profileskills>
            <div className="container">
                <Profille>
                    <Profiletitle><Profiletitlesp>My </Profiletitlesp>Profile</Profiletitle>
                    <Profilelist>
                        <Profileitem>
                            <Profileitemspan>Name</Profileitemspan>
                            Hamza Nabil
                        </Profileitem>
                        <Profileitem>
                            <Profileitemspan>Birthday</Profileitemspan>
                            21/1/1996
                        </Profileitem>
                        <Profileitem>
                            <Profileitemspan>Address</Profileitemspan>
                            Ain shams
                        </Profileitem>
                        <Profileitem>
                            <Profileitemspan>Phone</Profileitemspan>
                            4444 5555 6666
                        </Profileitem>
                        <Profileitem>
                            <Profileitemspan>Email</Profileitemspan>
                            hamza@hamza.com
                        </Profileitem>
                        <Profileitem>
                            <Profileitemspan>Website</Profileitemspan>
                            <Profileitemspanweb>www.google.com</Profileitemspanweb>
                        </Profileitem>
                    </Profilelist>
                </Profille>
                
                <Profileskills2>
                    <Profileskillstitle>Some <Profileskillstitlesp>skills</Profileskillstitlesp></Profileskillstitle>
                    <Profileskillsdesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </Profileskillsdesc>
                    <Profileskillsbar>
                        <Profileskillsbartitle>Bootstrap</Profileskillsbartitle>
                        <Profileskillsbarperc>100%</Profileskillsbarperc>
                        <Profileskillsbarparent>
                            <Profileskillsbarparentsp></Profileskillsbarparentsp>
                        </Profileskillsbarparent>
                    </Profileskillsbar>
                    
                    <Profileskillsbar>
                        <Profileskillsbartitle>CSS3</Profileskillsbartitle>
                        <Profileskillsbarperc>90%</Profileskillsbarperc>
                        <Profileskillsbarparent>
                            <span className="sp2"></span>
                        </Profileskillsbarparent>
                    </Profileskillsbar>
                    
                    <Profileskillsbar>
                        <Profileskillsbartitle>Photoshop</Profileskillsbartitle>
                        <Profileskillsbarperc>80%</Profileskillsbarperc>
                        <Profileskillsbarparent>
                            <span className="sp3"></span>
                        </Profileskillsbarparent>
                    </Profileskillsbar>
                </Profileskills2>
                
            </div>
        </Profileskills>
        
  );
  
}

export default Profile;