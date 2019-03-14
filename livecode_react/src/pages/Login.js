import React, { Component } from 'react';
// import axios from "axios";
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../Store';

class Login extends Component{
    doLogin = () => {
        this.props.postLogin().then(()=> {
          console.log("this",this);
          this.props.history.replace("/profile");
        });
      };
      render(){
        console.log("state", this.props.full_name);
        return(
        <div>
          <section className="content signin">
            <form onSubmit={e => e.preventDefault()}>
              <h4> Sign In</h4>
              <div>
                <label for="email"><i class="fa fa-envelope" aria-hidden="true"></i> <b>Username:</b></label>
                <input type="text" name="username" placeholder="Username" onChange={e => this.props.setField(e)}/>
              </div>
              <div>
                <label for="psw"><i class="fa fa-lock" aria-hidden="true"></i> <b>Email:</b></label>
                <input type="text" name="password" placeholder="Password" onChange={e => this.props.setField(e)}/>
              </div>
              <button onClick={() => this.doLogin()}>SignIn</button>
              <button type="reset">Reset</button>
            </form>
          </section>
          </div>
        );
      }
    }
export default connect(
    "is_login, email, full_name", actions
  )(withRouter(Login));