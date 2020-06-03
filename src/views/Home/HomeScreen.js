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

import RCM from '../../assets/img/RCM.png';
import WMS from '../../assets/img/WMS.png';

import FIN from '../../assets/img/FIN.png';
import Control_Room from '../../assets/img/Control_Room.png';

// class Login extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       openApps: false
//     };
//   }

//   handleInput() {}

//   handleLogin() {}

//   render() {
//     if (this.state.verifiedUser) {
//       return <Redirect to="/admin/dashboard" />;
//     }

//     if (this.state.openApps) {
//       return (
//         <div
//           style={{
//             display: 'flex',
//             flexDirection: 'column',
//             flex: 1,
//             position: 'fixed',
//             width: '100%',
//             height: '100%',
//             backgroundColor: '#0154E8'
//           }}
//         >
//           <div style={{ alignItems: 'center', flex: 1, display: 'flex' }}>
//             <Header />
//           </div>

//           <div
//             style={{
//               flex: 4,
//               display: 'flex',
//               flexDirection: 'column'
//               // justifyContent: 'center',
//               // alignItems: 'center'
//             }}
//           >
//             <div
//               style={{
//                 flex: 1,
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'center',
//                 alignItems: 'center'
//               }}
//             >
//               <Button
//                 onClick={() =>
//                   this.setState({ openApps: !this.state.openApps })
//                 }
//                 style={{
//                   borderRadius: 100 / 2,
//                   backgroundColor: '#F98435',
//                   width: 100,
//                   height: 100
//                   // textAlign: 'center'
//                 }}
//               >
//                 <h4
//                   style={{
//                     position: 'absolute',
//                     bottom: 40,
//                     fontFamily: 'Ubuntu',
//                     color: 'white',
//                     fontWeight: '700'
//                   }}
//                 >
//                   RCM
//                 </h4>
//                 <img
//                   src={RCM}
//                   style={{
//                     maxWidth: '40%',
//                     height: 'auto',
//                     position: 'absolute',
//                     top: 50,
//                     bottom: -20
//                   }}
//                 />
//               </Button>
//             </div>

//             <div
//               style={{
//                 flex: 1,
//                 display: 'flex',
//                 flexDirection: 'row',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 marginTop: -30
//               }}
//             >
//               <div style={{ marginRight: 75 }}>
//                 <Button
//                   onClick={() =>
//                     this.setState({ openApps: !this.state.openApps })
//                   }
//                   style={{
//                     borderRadius: 100 / 2,
//                     color: 'white',
//                     backgroundColor: '#A6A5A6',
//                     fontFamily: 'Ubuntu',
//                     fontWeight: '700',
//                     width: 100,
//                     height: 100,
//                     textAlign: 'center'
//                   }}
//                 ></Button>
//               </div>
//               <div style={{ marginLeft: 75 }}>
//                 <Button
//                   onClick={() =>
//                     this.setState({ openApps: !this.state.openApps })
//                   }
//                   style={{
//                     borderRadius: 100 / 2,
//                     color: 'white',
//                     backgroundColor: '#A6A5A6',
//                     fontFamily: 'Ubuntu',
//                     fontWeight: '700',
//                     width: 100,
//                     height: 100,
//                     textAlign: 'center'
//                   }}
//                 >
//                   <h4
//                     style={{
//                       position: 'absolute',
//                       bottom: 40,
//                       fontFamily: 'Ubuntu',
//                       color: 'white',
//                       fontWeight: '700'
//                     }}
//                   >
//                     WMS
//                   </h4>
//                   <img
//                     src={WMS}
//                     style={{
//                       maxWidth: '40%',
//                       height: 'auto',
//                       position: 'absolute',
//                       top: 50,
//                       bottom: -20
//                     }}
//                   />{' '}
//                 </Button>
//               </div>
//             </div>

//             <div
//               style={{
//                 flex: 1,
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'center',
//                 alignItems: 'center'
//               }}
//             >
//               <Button
//                 onClick={() =>
//                   this.setState({ openApps: !this.state.openApps })
//                 }
//                 style={{
//                   borderRadius: 100 / 2,
//                   color: 'white',
//                   backgroundColor: '#4e84db',
//                   fontFamily: 'Ubuntu',
//                   fontWeight: '700',
//                   width: 100,
//                   height: 100,
//                   textAlign: 'center'
//                 }}
//               >
//                 KHMC Apps
//               </Button>
//             </div>

//             <div
//               style={{
//                 flex: 1,
//                 display: 'flex',
//                 flexDirection: 'row',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 marginTop: -40
//               }}
//             >
//               <div style={{ marginRight: 80 }}>
//                 <Button
//                   onClick={() =>
//                     this.setState({ openApps: !this.state.openApps })
//                   }
//                   style={{
//                     borderRadius: 100 / 2,
//                     color: 'white',
//                     backgroundColor: '#F98435',
//                     fontFamily: 'Ubuntu',
//                     fontWeight: '700',
//                     width: 100,
//                     height: 100,
//                     textAlign: 'center'
//                   }}
//                 ></Button>
//               </div>
//               <div style={{ marginLeft: 80 }}>
//                 <Button
//                   onClick={() =>
//                     this.setState({ openApps: !this.state.openApps })
//                   }
//                   style={{
//                     borderRadius: 100 / 2,
//                     backgroundColor: '#FFBC28',
//                     width: 100,
//                     height: 100
//                   }}
//                 >
//                   <h4
//                     style={{
//                       position: 'absolute',
//                       bottom: 40,
//                       fontFamily: 'Ubuntu',
//                       color: 'white',
//                       fontWeight: '700'
//                     }}
//                   >
//                     FIN
//                   </h4>
//                   <img
//                     src={FIN}
//                     style={{
//                       maxWidth: '40%',
//                       height: 'auto',
//                       position: 'absolute',
//                       top: 50,
//                       bottom: -20
//                     }}
//                   />{' '}
//                 </Button>
//               </div>
//             </div>

//             <div
//               style={{
//                 flex: 1,
//                 display: 'flex',
//                 flexDirection: 'row',
//                 justifyContent: 'center',
//                 alignItems: 'center'
//               }}
//             >
//               <div style={{ marginRight: 25 }}>
//                 <Button
//                   onClick={() =>
//                     this.setState({ openApps: !this.state.openApps })
//                   }
//                   style={{
//                     borderRadius: 100 / 2,
//                     color: 'white',
//                     backgroundColor: '#609044',
//                     fontFamily: 'Ubuntu',
//                     fontWeight: '700',
//                     width: 100,
//                     height: 100,
//                     textAlign: 'center'
//                   }}
//                 ></Button>
//               </div>

//               <div style={{ marginLeft: 25 }}>
//                 <Button
//                   onClick={() =>
//                     this.setState({ openApps: !this.state.openApps })
//                   }
//                   style={{
//                     borderRadius: 100 / 2,
//                     backgroundColor: '#4e84db',
//                     width: 100,
//                     height: 100
//                   }}
//                 >
//                   <h6
//                     style={{
//                       position: 'absolute',
//                       bottom: 30,
//                       fontFamily: 'Ubuntu',
//                       color: 'white',
//                       fontWeight: '700'
//                     }}
//                   >
//                     Control Room
//                   </h6>
//                   <img
//                     src={Control_Room}
//                     style={{
//                       maxWidth: '40%',
//                       height: 'auto',
//                       position: 'absolute',
//                       top: 60,
//                       bottom: -20
//                     }}
//                   />{' '}
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     } else {
//       return (
//         <div
//           style={{
//             display: 'flex',
//             flexDirection: 'column',
//             flex: 1,
//             position: 'fixed',
//             width: '100%',
//             height: '100%',
//             backgroundColor: '#0154E8'
//           }}
//         >
//           <div style={{ alignItems: 'center', flex: 1, display: 'flex' }}>
//             <Header />
//           </div>

//           <div
//             style={{
//               flex: 4,
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'center',
//               alignItems: 'center'
//             }}
//           >

//               <Button
//                 onClick={() =>
//                   this.setState({ openApps: !this.state.openApps })
//                 }
//                 style={{
//                   borderRadius: 100 / 2,
//                   color: 'white',
//                   backgroundColor: '#4e84db',
//                   fontFamily: 'Ubuntu',
//                   fontWeight: '700',
//                   width: 100,
//                   height: 100,
//                   textAlign: 'center', alignSelf:"center"

//                 }}
//               >
//                 KHMC Apps
//               </Button>
//           </div>
//         </div>
//       );
//     }
//   }
// }

// export default Login;

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
            backgroundColor: '#0154E8'
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
                    color: 'white',
                    fontWeight: '500'
                  }}
                >
                  KHMC
                </h4>
                <p style={{ position: 'absolute', top: 60 }}>Apps</p>
              </div>

              <div
                className="submenu circle orange"
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
                  RCM
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
                onClick={() => this.props.history.push('home/controlroom')}
              >
                <h4
                  style={{
                    position: 'absolute',
                    top: 10,
                    color: 'white',
                    fontWeight: '500',
                    textAlign: 'center'
                  }}
                >
                  Control Room
                </h4>
                <img
                  src={Control_Room}
                  style={{
                    maxWidth: '40%',
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
                <h4
                  style={{
                    position: 'absolute',
                    top: 20,
                    color: 'white',
                    fontWeight: '500'
                  }}
                >
                  FIN
                </h4>
                <img
                  src={FIN}
                  style={{
                    maxWidth: '40%',
                    height: 'auto',
                    position: 'absolute',
                    top: 50,
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
                  WMS
                </h4>
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
            backgroundColor: '#0154E8'
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
              KHMC Apps
            </Button>
          </div>
        </div>
      );
    }
  }
}

export default HomeScreen;
