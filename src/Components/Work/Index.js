
import React, { Component }  from 'react';
import {Workg,Worktitle,Workspan,Workpart,Workpartic,Workparttitle,Workpartline,Workpartdesc,Workpartfir} from'./Style.js'
import axios from 'axios';

class  Work extends Component {
    state={
        works:[]
    }
    componentDidMount(){
        axios.get('js/data.json').then(res=> {this.setState({works:res.data.works})}    )
    }
    render (){
        const{works}=this.state;
        const worksList=works.map((workItem)=>{
            return(
                <Workpartfir first={workItem.id} key={workItem.id}>
                        <Workpartic className={workItem.icon_name}></Workpartic>
                        <Workparttitle>{workItem.title}</Workparttitle>
                        <Workpartline/>
                        <Workpartdesc>
                            {workItem.body}
                        </Workpartdesc>
                    </Workpartfir>

            )
        })
        
        
         return (
        <Workg>
                <div className="container">
                    <Worktitle ><Workspan>My</Workspan> Work</Worktitle>
                    {worksList}
                </div>
            </Workg>  );}
 

  
}

export default Work;