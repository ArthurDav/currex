import React, {Component} from 'react'
import './Header.css'


class Header extends Component {
    render() {
        return (
            <div className="Header">
                <nav className="navbar navbar-expand-lg  primary-color">
                    <a className="navbar-brand" href="#">Currex</a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar"
                        aria-controls="Navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse">

                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home
                                <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Data</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    

                        <form className="form-inline">
                            <div className="md-form my-0">
                                <button className="btn btn-md nav-btn pulse">Get the App</button>
                                <button className="btn btn-md nav-btn pulse">Login</button>
                            </div>
                        </form>
                    </div>
                

                </nav>


            </div>
        )
    }
}


export default Header