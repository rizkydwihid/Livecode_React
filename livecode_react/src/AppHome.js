import React, { Component } from 'react';
import Home from './pages/Home';
import { Redirect } from 'react-router-dom';
import {connect} from 'unistore/react';
import {withRouter} from 'react-router-dom';
import {actions} from './Store';


class AppGallery extends Component {
  render() {
    // if (!this.props.is_login) {
    //   return <Redirect to={{pathname: "/signin"}}/>;
    // }
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}



export default connect("is_login", actions)(withRouter(AppGallery));
