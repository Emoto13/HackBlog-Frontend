import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import SportApp from './blogs/sport-blog/sportApp'

import * as serviceWorker from './serviceWorker';
import SportPost from './blogs/sport-blog/sportPost.js';


const routing = (
  <Router>
    <div>
      <Route path="/sport" component={SportApp} />
      <Route path="/sport-post/:id" component={SportPost} />
    </div>
  </Router>
)


ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
