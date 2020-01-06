import React, { Component } from 'react'
class Section2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render(){
        return (
            <div  className="section5">
                <div className="div1-section5">
                <h1>The world's<br/>
biggest healthcare platform</h1>
<p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
</div>

{this.props.cadre.map(el=>
    <div className={el.classdiv}>
        <img src={el.img} alt={el.img} className={el.classimg}></img>
        <h2>{el.title}</h2>
        <p>{el.body}</p>
    </div>)}
    <img alt=""src="https://prowly-uploads.s3.eu-west-1.amazonaws.com/uploads/4818/assets/40124/large_miodottore-mktpl-symbol-turquoise.png" className="mini-logo"></img>
            </div>

        )
    }
}
 
export default Section2;