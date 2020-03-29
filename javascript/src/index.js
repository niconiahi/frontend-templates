import React, { StrictMode } from 'react';
import { Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

// styles
import 'lib/reset.css';

// Redux
import { store, persistor, history } from './store';

// Constants
import { ROUTES } from 'lib/constants/routes';

// components
import Sample from 'modules/sample/pages/Sample';
import Login from 'modules/session/pages/Login';

const routes = [
  { Component: Login, path: ROUTES.session.login },
  { Component: Sample, path: ROUTES.sample },
  { Component: Sample, path: '*' },
];

const App = () => (
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ConnectedRouter history={history}>
          <Switch>
            {routes.map(({ Component, path }) => (
              <Route key={path} exact path={path}>
                <Component />
              </Route>
            ))}
          </Switch>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);

ReactDOM.render(<App />, document.querySelector('#root'));
