'use strict';

console.log('App.js is running');

//JSX - JavaSctip XML
var template = React.createElement(
  'h1',
  { id: 'firstString' },
  'Babel is watching for you'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
