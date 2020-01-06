import React, { Component } from 'react'
class Section3 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render(){
        return(
            <div>
                <div className="section6">
                <h1>Improve the lives of millions.<br/> Change yours forever</h1>
                <p>More than 1000 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and Curitiba, our search for great talent never stops.</p>
                </div>
                <div className="section7">
                {this.props.carte.map(el=>
                <div >
                    <img src={el.url} alt="el.url" className="img-sect7"></img>
                    <h3>{el.name}</h3>
                    <button className="button-sect7">SEE OPENINGS</button>

                    </div>
                    )}
                    </div>
            </div>
        )
    }
}
 
export default Section3;