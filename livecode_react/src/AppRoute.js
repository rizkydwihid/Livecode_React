import React, { Component } from "react";
import MainRoute from "./MainRoute";
import { withRouter } from "react-router-dom";
import Navigation from './component/Navigation';


class AppMovie extends Component {
  
  postSignout = () => {
    localStorage.removeItem("is_login");
    this.props.history.push("/login");
  };
  render() {
    return (
      <div>
        <Navigation postSignout={this.postSignout}/>
        <MainRoute />
      </div>
    );
  }
}

export default withRouter(AppMovie);
