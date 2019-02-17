import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './components/App';
import ListingPage from './components/ListingPage';
import registerServiceWorker from './registerServiceWorker';

const route = (
  <Router>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/listing' component={ListingPage} />
    </Switch>
  </Router>
)

ReactDOM.render(route, document.getElementById('root'));
registerServiceWorker();
