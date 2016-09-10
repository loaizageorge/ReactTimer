var React = require('react');
var ReactDOM = require('react-dom');
var{Route, Router, IndexRoute, hashHistroy} = require('react-router');//Object destructuring
var Main = require('Main');

//Load foundation

require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
<Router history={hashHistroy}>
  <Route path="/" component={Main}>
  </Route>
</Router>,
  document.getElementById('app')
);