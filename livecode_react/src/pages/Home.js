import React, {Component} from 'react';
import '../static/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

class Home extends Component {
    render(){
        return (
            <div className="container">    
            <div className="row">
            <div class="card-deck">
                <div class="card" style={{width:"100", height:"600"}}>
                <img src={require('../static/img/romance.jpg')} style={{height:"auto"}} className="image1"/><br></br>
                  <div class="card-body">
                  <Link to="/seemovie">See Movie</Link>
                  {/* <button >See Movie</button> */}
                  </div>
                </div>
                <div class="card">
                <img src={require('../static/img/action.jpg')} className="image1"/><br></br>
                  <div class="card-body">
                  <Link to="/seemovie">See Movie</Link>
                  {/* <button >See Movie</button> */}
                  </div>
                </div>
                <div class="card">
                <img src={require('../static/img/fiction.jpg')} className="image1"/><br></br>
                  <div class="card-body">
                  <Link to="/seemovie">See Movie</Link>
                  {/* <button >See Movie</button> */}
                  </div>
                </div>
                <div class="card" style={{width:"100", height:"600"}}>
                <img src={require('../static/img/comedy.jpg')} className="image1"/><br></br>
                  <div class="card-body">
                  <Link to="/seemovie">See Movie</Link>
                  </div>
                </div>
            </div>
            </div>
            </div>    
        );
    }
}
export default Home;

