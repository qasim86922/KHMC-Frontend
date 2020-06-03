
import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Redirect } from 'react-router-dom';
// core components
import Admin from 'layouts/Admin.js';
import 'assets/css/material-dashboard-react.css?v=1.8.0';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import axios from 'axios';
import cookie from 'react-cookies';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import * as serviceWorker from './serviceWorker';
import Login from './layouts/Login';

import ForgetPassword from './layouts/ForgetPassword';

import ResetPasswordStatus from './layouts/ResetPasswordStatus';

import HomeScreen from '../src/views/Home/HomeScreen';
import ControlRoom from '../src/views/Home/ControlRoom';
import WMS from '../src/views/Home/WMS';


import BusinessUnit from '../src/views/BusinessUnit/BusinessUnit';

import AddBusinessUnit from '../src/views/BusinessUnit/AddBusinessUnit';

import SuccessScreen from '../src/views/BusinessUnit/SuccessScreen';

import configureStore, { history } from './store';
// import BusinessUnit from 'subRoutes/business_unit';

export const { persistor, store } = configureStore();

const hist = createBrowserHistory();
function SecuredRoute(props) {
  const { component: Component, path } = props;
  return (
    <Router history={hist}>
      <Route
        path={path}
        render={() => {
          // document.cookie = 'loggedInUser=';

          // console.log(document.cookie.split('=')[1]);
          const token = cookie.load('token') || '';

          if (token) {
            return <Component />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
    </Router>
  );
}

function interceptor() {
  axios.interceptors.request.use(
    function(config) {
      const token = cookie.load('token') || '';
      const currentUser = cookie.load('current_user') || '';
      console.log('token: ', token);
      // Do something before request is sent
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        if (currentUser && currentUser.staffTypeId) {
          config.headers.role = currentUser.staffTypeId.type;
        }
      }
      return config;
    },
    function(error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
  axios.interceptors.response.use(
    function(response) {
      return response;
    },
    function(error) {
      if (error.response) {
        console.log('error: ', error.response.data);
      } else {
        console.log('error: ', error);
      }
      return error;
    }
  );
}

const MainApp = () => {
  interceptor();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <Router history={hist}>
            {/* <Switch>
              <Route path="/admin" component={Admin}></Route>
              <Route exact path="/" component={Login} />
              <Route exact path="*" component={NotFound} />
            </Switch> */}

            {/* <SecuredRoute path="/admin" component={Admin} /> */}
            {/* <SecuredRoute exact path="/login" component={Login} /> */}
            
            {/* <SecuredRoute path="/admin" component={Admin} /> */}
            
            {/* <SecuredRoute path="/home" component={HomeScreen} /> */}

            <Route path="/login" component={Login} />

            <Route exact path="/" component={Login} />
            <Route exact path="/forgetpassword" component={ForgetPassword} />

            <Route
              exact
              path="/emailsendstatus"
              component={ResetPasswordStatus}
            />

            <Route path="/bus" component={BusinessUnit} />

            <Route path="/businessunit/next/add" component={AddBusinessUnit} />
            <Route path="/businessunit/next/edit" component={AddBusinessUnit} />

            <Route
              path="/bus/next/success"
              component={SuccessScreen}
            />

            <Route exact path="/home" component={HomeScreen} />
            <Route path="/home/controlroom" component={ControlRoom} />
            <Route path="/home/controlroom/wms" component={WMS} />



            {/* <Route path="*" component={NotFound} /> */}

            {/* <SecuredRoute path="/" component={Login} /> */}
          </Router>
          <ToastsContainer store={ToastsStore} />
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
};

ReactDOM.render(<MainApp />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
