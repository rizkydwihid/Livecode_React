import React, { Component } from 'react';
import './App.css';
import Navigation from './component/Navigation';
import Login from './pages/Login';
import SeeMovie from './component/SeeMovie';
import SeeImgMovie from './component/SeeImgMovie';
import AppHome from './AppHome';
import {connect} from 'unistore/react';
import {withRouter} from 'react-router-dom';
import {actions} from './Store';

const imgNOL = 0;

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      listMovie: [],
      listMovie2: [],
      username: "",
      islogin: false,
      search: ""
    }
  }

  componentDidMount = () => {
    // const self = this;
    this.props.getURLMovie()

  }


  render() {
    const {listMovie, listMovie2, username, isilogin} = this.state;
    return (
      <div className="App">
        <div className="container">
          <div className="row">
        
          <div class="col-md-8">
            {this.props.listMovie.map((item,key) => {
              const src_img = item.Poster === null ? imgNOL : item.Poster;
              const src_synopsis = item.urlToImage !== null ? item.Synopsis : "";
              return <SeeMovie key={key} img={src_img} title={item.Title} year={item.Year} synopsis={src_synopsis} />;
            })}
          </div>  
          </div>
        </div>
        
      </div>
    );
  }
}

export default connect("listMovie, listMovie2", actions)(withRouter(App));

