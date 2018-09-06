import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { firebaseConnect } from './fireBaseConnect';
import * as firebase from 'firebase';

class App extends Component {

  pushData = () => {
    var connectData = firebase.database().ref('DataForNote');
    connectData.push({
      title: "Note3",
      content: "Content of note3"
    })
  }

  deleteData = (id) => {
    var connectData = firebase.database().ref('DataForNote');
    connectData.child(id).remove();
    console.log("delte complete")
  }

  render() {
    console.log(firebaseConnect)


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={() => this.pushData()}> Add by using push()</button>
        <hr />
        <button onClick={() => this.deleteData('-LLhNSGdyQ2oSUf0eNx-')}> Remove by using remove()</button>
      </div>
    );
  }
}

export default App;
