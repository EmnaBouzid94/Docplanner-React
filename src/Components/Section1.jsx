import React, { Component } from 'react'


const tab =[{p:"We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.",class:"p1"},{p:"We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.",class:"p2"}]




class Section1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render(){
        return(
            <div className="firstsection">
            
            <img alt=""src="https://www.docplanner.com/img/sygnet.png" className="logo-section1"></img>
            <h1 className="section1-h1">Making the healthcare experience more human</h1>
            <div className="parags">
             {tab.map(el=> <p className={el.class}>{el.p}</p>)}
             </div>
             <div className="section3">
                 
            {this.props.card.map(el => 
            { if (el.title==="For doctors")
                {return(<div className={el.class}>
                
                <p>{el.title}</p>
                <h2>{el.body}</h2>
                <img src={el.img} alt= {el.img} className={el.classimg}/>
                </div>)}
            else{return (<div className={el.class}>
                
            <p>{el.title}</p>
            <h2>{el.body}</h2>
            <select className="button-country">
        {this.props.select.map(el=>
            
                
                
        <option href={el.url}>
            
            {el.name}
            
            </option>
                
            )}
            </select>
    <img src={el.img} alt= {el.img} className={el.classimg}/>
    </div>)
        }
        }
            )}
    
            </div>
            <div className="section4">
            <p className="h2">We are a global <br/>company <br/>
with local culture</p>
<div className="sect4">
    {this.props.logo.map(el=>
        <div className="section4-logos">
        
        <img alt=""src="https://www.docplanner.com/img/sygnet.png" className="logo" ></img>
            <span className="logo-name">{el}</span>
        

            
        </div>)}
        </div>
        </div>
    </div>)
    }
}
 
export default Section1;