import React, { Component } from 'react'
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
  render()
  {
      return(
          <div className="footer">
              <p >We are leaders in 10 countries: 
                  
                  {this.props.link.map(el=>
                  
                  <a href={el.url} className="footera">{el.name}
                 <span >{el.p}</span>
                 </a>
                
                  
                  )
                  }
                  </p>
                    <p>This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.<br/>

www.docplanner.com © 2020</p>
              
          </div>
          
      )
  }  
}
 
export default Footer;