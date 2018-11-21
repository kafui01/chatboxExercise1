import React, { Component } from "react";
import firebase from "firebase";
import RoomList from "./components/RoomList";
import "./styles.css";

var config = {
  apiKey: "AIzaSyDBjIE4hLDvsU8xEWQZCJgFnuaH8FX2wIE",
  authDomain: "chatbox-f1632.firebaseapp.com",
  databaseURL: "https://chatbox-f1632.firebaseio.com",
  projectId: "chatbox-f1632",
  storageBucket: "chatbox-f1632.appspot.com",
  messagingSenderId: "1081142940081"
};
firebase.initializeApp(config);
class App extends Component {
  render() {
    return (
      <div className="App">
        <RoomList myfirebase={firebase} />
      </div>
    );
  }
}

export default App;
