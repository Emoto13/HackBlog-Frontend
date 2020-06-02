import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'

import * as serviceWorker from './serviceWorker';

import PostApp from './blogs/post-components/postApp';
import SportBlogsApp from './blogs/sport/sportBlogsApp';
import CreatePostApp from './create-post/createPostApp';


const routing = (
  <Router>
    <div>
      <Route path="/sport" component={SportBlogsApp} />
      <Route path="/create-post" component={CreatePostApp} />
      <Route path="/:typePost/:id" component={PostApp} />
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
