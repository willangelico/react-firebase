var firebase = require('firebase')
var React = require('react')
var ReactDOM = require('react-dom')
var Routes = require('./routes')

// Initialize Firebase
var config = {
   apiKey: "AIzaSyCwIYm9JBjk5FkJCQDUUdjASNkgeitXSV0",
   authDomain: "react-fb-e21fe.firebaseapp.com",
   databaseURL: "https://react-fb-e21fe.firebaseio.com",
};

firebase.initializeApp(config);

var mountNode = document.getElementById('app')

ReactDOM.render(Routes, mountNode)