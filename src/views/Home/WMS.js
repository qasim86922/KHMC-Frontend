// import React from 'react';

// import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

import Snackbar from 'components/Snackbar/Snackbar';
import Notification from 'components/Snackbar/Notification.js';

import AddAlert from '@material-ui/icons/AddAlert';

import { Redirect } from 'react-router-dom';
import axios from 'axios';
import cookie from 'react-cookies';

import Header from '../../components/Header./Header';

import RCM from '../../assets/img/business_Unit.png';
import WMS from '../../assets/img/WMS.png';

import FIN from '../../assets/img/FIN.png';
import Control_Room from '../../assets/img/Control_Room.png';

import FunctionalUnit from '../../assets/img/Functional Unit.png';

import Vendor from '../../assets/img/Vendot.png';

import WMS_Back from '../../assets/img/WMS_Back.png';

import Items from '../../assets/img/Items.png';

import React, { useEffect } from 'react';
import './MenuPage.css';
import { render } from 'react-dom';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openApps: false
    };
  }

  render() {
    if (this.state.openApps) {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            position: 'fixed',
            width: '100%',
            height: '100%',
            // backgroundColor: '#0154E8'
            backgroundImage: `url("${WMS_Back}")`,
            backgroundSize: '100%'
          }}
        >
          <div style={{ alignItems: 'center', flex: 1, display: 'flex' }}>
            <Header />
          </div>

          <div className="menupage" style={{ display: 'flex', flex: 4 }}>
            <section>
              <div
                className="mainmenu circle lightBlue"
                style={{ cursor: 'pointer' }}
                onClick={() => this.setState({ openApps: false })}
              >
                <h4
                  style={{
                    position: 'absolute',
                    top: 20,
                    color: 'white',
                    fontWeight: '500',
                    textAlign: 'center'
                  }}
                >
                  WMS
                </h4>
                <img
                  src={WMS}
                  style={{
                    maxWidth: '40%',
                    height: 'auto',
                    position: 'absolute',
                    top: 50,
                    bottom: -40
                  }}
                />{' '}
              </div>

              <div
                className="submenu circle orange"
                style={{ cursor: 'pointer' }}
                onClick={() => this.props.history.push('/bus')}
              >
                <h4
                  style={{
                    position: 'absolute',
                    top: 20,
                    color: 'white',
                    fontWeight: '500'
                  }}
                >
                  BU Mgmt
                </h4>
                <img
                  src={RCM}
                  style={{
                    maxWidth: '40%',
                    height: 'auto',
                    position: 'absolute',
                    top: 50,
                    bottom: -20
                  }}
                />{' '}
              </div>

              <div className="submenu1 circle gray">
                <h4></h4>
              </div>

              <div className="submenu2 circle orange"></div>

              <div className="submenu3 circle green"></div>

              <div
                className="submenu4 circle lightBlue"
                style={{ cursor: 'pointer' }}
              >
                <h6
                  style={{
                    position: 'absolute',
                    top: 15,
                    color: 'white',
                    fontWeight: '500',
                    textAlign: 'center',
                    maxWidth: 50
                  }}
                >
                  Items Mgmt
                </h6>
                <img
                  src={Items}
                  style={{
                    maxWidth: '30%',
                    height: 'auto',
                    position: 'absolute',
                    top: 65,
                    bottom: -20
                  }}
                />{' '}
              </div>

              <div
                className="submenu5 circle yellow"
                style={{ cursor: 'pointer' }}
              >
                <h6
                  style={{
                    position: 'absolute',
                    top: 20,
                    color: 'white',
                    fontWeight: '500',
                    textAlign: 'center'
                  }}
                >
                  Vendors Mgmt
                </h6>
                <img
                  src={Vendor}
                  style={{
                    maxWidth: '40%',
                    height: 'auto',
                    position: 'absolute',
                    top: 70,
                    bottom: -20
                  }}
                />{' '}
              </div>

              <div
                className="submenu6 circle gray"
                style={{ cursor: 'pointer' }}
              >
                <h4
                  style={{
                    position: 'absolute',
                    top: 20,
                    color: 'white',
                    fontWeight: '500'
                  }}
                >
                  FU Mgmt
                </h4>
                <img
                  src={FunctionalUnit}
                  style={{
                    maxWidth: '40%',
                    height: 'auto',
                    position: 'absolute',
                    top: 50,
                    bottom: -20
                  }}
                />{' '}
              </div>
            </section>
          </div>
        </div>
      );
    } else {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            position: 'fixed',
            width: '100%',
            height: '100%',
            backgroundImage: `url("${WMS_Back}")`,
            backgroundSize: '100%'
          }}
        >
          <div style={{ alignItems: 'center', flex: 0.7, display: 'flex' }}>
            <Header />
          </div>

          <div
            style={{
              flex: 4,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Button
              onClick={() => this.setState({ openApps: !this.state.openApps })}
              style={{
                borderRadius: 100 / 2,
                color: 'white',
                backgroundColor: '#4e84db',
                fontFamily: 'Ubuntu',
                fontWeight: '700',
                width: 100,
                height: 100,
                textAlign: 'center',
                alignSelf: 'center'
              }}
            >
              <h4
                style={{
                  position: 'absolute',
                  top: 15,
                  color: 'white',
                  fontWeight: '500',
                  textAlign: 'center'
                }}
              >
                WMS
              </h4>{' '}
              <img
                src={WMS}
                style={{
                  maxWidth: '40%',
                  height: 'auto',
                  position: 'absolute',
                  top: 50,
                  bottom: -20
                }}
              />{' '}
            </Button>
          </div>
        </div>
      );
    }
  }
}

export default HomeScreen;
