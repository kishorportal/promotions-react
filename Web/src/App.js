import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faCheckSquare, faCoffee, faLock } from '@fortawesome/free-solid-svg-icons';
import { faCircle, faDollarSign, faCopy, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './scss/style.scss';

import './App.css';

library.add(fab, faCheckSquare, faCoffee, faLock);
library.add(far,faCircle, faDollarSign, faCopy,faEnvelope)


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const Login = React.lazy(() => import('./views/Login/login'));
const Layout = React.lazy(() => import('./containers/layout'));

class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route path="/login" name="Login" render={props => <Login {...props}/>} />
              <Route path="/" name="Home" render={props => <Layout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
