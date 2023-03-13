import { Component } from "react";
import { MenuData } from "./MenuData";
import "./NavbarStyles.css"

class Navbar extends Component{
    state = {clicked: false};
    handleClick =()=>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
            <div>
            <img src="images/logo.png" className="logop" alt=""/><br></br>
            {/* <h1 className="logo">VENDLIFY</h1> */}
          </div>

            <div className="menu-icons"
            onClick={this.handleClick}>
                <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>

            <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuData.map((item, index )=> {
                return(
                    <li key={index}>
                    <a href={item.url}
                    className={item.cName}>
                    {item.title}
                    </a>
                </li>
                )
            })}
                
            </ul>
            </nav>
        )


    }
}

export default Navbar