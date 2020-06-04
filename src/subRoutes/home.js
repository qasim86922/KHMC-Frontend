import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import NotFound from '../components/NotFound/NotFound';
import HomeScreen from '../views/Home/HomeScreen';

import ControlRoom from '../views/Home/ControlRoom';

import WMS from '../views/Home/WMS';

import BusinessUnitRoutes from '../subRoutes/business_unit';


import ControlRoomRoutes from '../subRoutes/controlRoom'

const hist = createBrowserHistory();

class HomeScreenRoutes extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path={'/home'} component={HomeScreen} />

        <Route  path={'/home/controlroom'} component={ControlRoomRoutes} />

        {/* <Route exact path={'/home/controlroom/wms'} component={WMS} />

        <Route
          path={'/home/controlroom/wms/bus'}
          component={BusinessUnitRoutes}
        /> */}

        <Route path="*" component={NotFound} />
      </Switch>
    );
  }
}

export default HomeScreenRoutes;
