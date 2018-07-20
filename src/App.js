import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var NotificationSystem = require('react-notification-system');

class App extends Component {
  constructor(){
    super();
    this._notificationSystem= null;

    this._addNotification = this._addNotification.bind(this);

  }

  componentDidMount(){
    this._notificationSystem = this.refs.notificationSystem;
  }

  _addNotification(event) {
    event.preventDefault();
    this._notificationSystem.addNotification({
      message: 'Notification message',
      level: 'success'
    });
  }

  render() {
    return (
      <div className="App">
        <NotificationSystem ref="notificationSystem" />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <button onClick={this._addNotification}>Add notification</button>

        
      </div>
    );
  }
}

export default App;
