import React, {Component} from 'react';
import '../static/css/bootstrap.min.css';
import '../static/css/main.css';
import {Link} from 'react-router-dom';

class Navigation extends Component {
    render(){
        return(
            <header className="container">
            <div className="row">
                <div className="col-md-3 offset-4 col-4 offset-md-0">
                
                </div>
                <div className="col-md-9">
                <ul className="nav navbar-content-end nav-kanan">
                    <li className="nav-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/profile">Profile</Link>
                    </li>
                    <li class="nav-item" style={{display: this.props.is_login ? "none" : "block"}}>
                      <Link to="/login" >Login</Link>
                    </li>
                    <li class="nav-item" style={{display: this.props.is_login ? "block" : "none"}}>
                      <Link to="/login" onClick={() => this.props.postSignout()} >Logout</Link>
                    </li>
                </ul>
                </div>
            </div>
            </header>
            // <header className="container">
            // <div className="row">
            //   <div className="col-md-3 offset-4 col-4 offset-md-0">
            //     <nav class="navbar navbar-expand-lg navbar-light bg-light">
            //         <a class="navbar-brand" href="#">Movie</a>
            //         <div class="collapse navbar-collapse" id="navbarText">
            //           <ul class="navbar-nav mr-auto">
            //             <li class="nav-item active">
            //             <Link to="/">Home</Link>
            //               {/* <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> */}
            //             </li>
            //             <li class="nav-item">
            //             <Link to="/profile">Profile</Link>
            //               {/* <a class="nav-link" href="#">Profile</a> */}
            //             </li>
            //             <li class="nav-item">
            //             <Link to="/login">Login</Link>
            //             </li>
            //           </ul>
            //         </div>
            //     </nav>
            //     </div>
            //     </div>
            // </header>
        );
    }
}
export default Navigation;

    