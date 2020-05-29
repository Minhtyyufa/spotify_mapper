import React from "react";
import "./App.css";
import Button from "react-bootstrap/Button";

export default class App extends React.Component {

  render() {
    return <Button href='http://localhost:8888' variant="primary">Login</Button>;
  }
}

//export default App;
