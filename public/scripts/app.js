console.log('App.js is running') 

//JSX - JavaSctip XML
// var template = <p>JSX template from app.js</p>;
var template = React.createElement(
    "p",
    null,
    "JSX template from app.js"
  );
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);