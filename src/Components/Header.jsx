import React, { Component } from 'react'
class Header extends Component {
    state = {  }
    render() { 
        return (
            <div className="header">
            <img alt="" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" className="logo-nav"></img>
            <div className="nav">
                <div>
                    <a href="https://www.docplanner.com/about-us" className="nav-green">About Us</a>
                </div>
                <div>
                    <a href="https://www.docplanner.com/about-us" className="nav-grey">Carrer</a>
                </div>
                <div className="drop">
                    <a href="https://www.docplanner.com/about-us" className="nav-grey">Departments</a>
                    <div className="drop-content">
                        <div className=" navback"><a href="https://www.docplanner.com/about-us" className="nav-grey">Marketing & PR</a></div>
                        <div className=" navback"><a href="https://www.docplanner.com/about-us" className="nav-grey">Customer Success & Sales</a></div>
                        <div className=" navback"><a href="https://www.docplanner.com/about-us" className="nav-grey">IT, Products,Design & UX</a></div>
                        <div className=" navback"><a href="https://www.docplanner.com/about-us" className="nav-grey">Finance & Administration</a></div>
                        <div className=" navback"><a href="https://www.docplanner.com/about-us" className="nav-grey">HR & more</a></div>
                    </div>
                </div>
            </div>
            </div>
           
        )}
}
 
export default Header;