import React from 'react';

import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

import Snackbar from 'components/Snackbar/Snackbar';
import Notification from 'components/Snackbar/Notification.js';

import AddAlert from '@material-ui/icons/AddAlert';

import { Redirect } from 'react-router-dom';
import axios from 'axios';
import cookie from 'react-cookies';
import { loginUrl } from '../public/endpoins';

import Splash from '../assets/img/Splash.png';

import Influence_white from '../assets/img/KHMC Circle Logo.png';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      null_userName: false,

      password: '',
      null_password: '',

      tr: false,

      verifiedUser: false,

      msg: ''
    };
  }

  handleInput(e, key) {
    this.setState({ [key]: e.target.value });
  }

  handleLogin() {
    // if (this.state.userName === '' && this.state.password === '') {
    //   this.setState({ null_userName: true, null_password: true });
    // } else if (this.state.userName === '') {
    //   this.setState({ null_userName: true });
    // } else if (this.state.password === '') {
    //   this.setState({ null_password: true });
    // } else {
    //   var re = /\S+@\S+\.\S+/;
    //   if (!re.test(this.state.userName)) {
    //     this.setState({ tr: true, msg: 'Enter the valid email address' });
    //   } else {
    //     const params = {
    //       email: this.state.userName,
    //       password: this.state.password
    //     };
    //     axios
    //       .post(loginUrl, params)
    //       .then(res => {
    //         if (res.data.success) {
    //           console.log(res.data);
    //           cookie.save('token', res.data.data.token, { path: '/' });
    //           cookie.save('current_user', res.data.data.user, { path: '/' });
    //           this.setState({
    //             verifiedUser: true
    //           });
    //         }
    //         // else if (!res.data.success) {
    //         //   this.setState({ tr: true });
    //         // }
    //       })
    //       .catch(e => {
    //         console.log('error is ', e);
    //         this.setState({ tr: true, msg: 'Login failed' });
    //       });
    //   }
    // }
    // this.props.history.push('/emailsendstatus');
  }

  handleNameChange(name) {
    this.setState({ name });
  }

  render() {
    if (this.state.tr) {
      setTimeout(() => {
        this.setState({ tr: false, msg: '' });
      }, 2000);
    }
    if (this.state.verifiedUser) {
      return <Redirect to="/admin/dashboard" />;
    }

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          position: 'fixed',
          width: '100%',
          height: '100%',
backgroundImage:`url("${Splash}")`,
          backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    
    }}
      >
        <div
          style={{
            flex: 1,
            // justifyContent: 'center',
            // alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
            marginLeft: '4%',
            marginRight: '4%'
            // backgroundColor: 'red'
          }}
        >
       
          <div style={{ display: 'flex', flex: 1,alignItems:"flex-end" }}>
            <img
              src={Influence_white}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div> 
        </div>
      </div>
    );
  }
}

export default Login;
