import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'

import * as serviceWorker from './serviceWorker';


import SportBlogsApp from './blogs/sport/sportBlogsApp';
import CreatePostApp from './create-post/createPostApp';
import HomeApp from './home/homeApp.js';
import TechBlogsApp from './blogs/tech/techBlogsApp';
import OtherBlogApp from './blogs/other/otherBlogsApp';
import PoliticsBlogsApp from './blogs/politics/politicsBlogsApp';
import OpinionBlogsApp from './blogs/opinion/opinionBlogsApp';
import PostApp from './posts/postApp';


const routing = (
  <Router>
    <div>
      <Route path="/home" component={HomeApp} />

      <Route path="/sport" component={SportBlogsApp} />
      <Route path="/tech" component={TechBlogsApp} />
      <Route path="/politics" component={PoliticsBlogsApp} />
      <Route path="/opinion" component={OpinionBlogsApp} />
      <Route path="/other" component={OtherBlogApp} />
      
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
