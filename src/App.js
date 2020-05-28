import React from 'react';
import './App.css';
import Button from "react-bootstrap/Button"

export default class App extends React.Component {


  sendRequest = () => {
    var my_client_id = '8d8502bee6a6466089d848db0776d6a0';
    var redirect_uri = "http://localhost:3000"
    var scopes = 'user-read-private user-read-email';
    var path = 'https://accounts.spotify.com/authorize' +
    '?response_type=code' +
    '&client_id=' + my_client_id +
    (scopes ? '&scope=' + encodeURIComponent(scopes) : '');

    fetch(path, {method: 'GET'}).then((res) => console.log(res))
    
    /*
    var express = require('express')
    var app = express()
    app.get('/login', function(req, res) {
      var scopes = 'user-read-private user-read-email';
      res.redirect('https://accounts.spotify.com/authorize' +
        '?response_type=code' +
        '&client_id=' + my_client_id +
        (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
        '&redirect_uri=' + encodeURIComponent(redirect_uri));
      
      //console.log(res)
      });
      
    */
  }

  render() {
    return(
      <Button onClick = {this.sendRequest}>
        Some Text
      </Button>
    );
  }
}

//export default App;
