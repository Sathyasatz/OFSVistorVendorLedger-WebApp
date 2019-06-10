import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import SignIn from './Login/Login';
import ListGuestLedger from './ListGuestLedger/ListGuestLedger';
import { Redirect } from 'react-router';
import firebase from './firebase.js';

class App extends React.Component {

  state = {
    loggedIn: false,
    visitorsList: []
  };

  doLogin = (e) => {
    
    e.preventDefault();
    this.setState({ loggedIn: true });
    this.props.history.replace('/listguest');
  };

  componentDidMount = () => {

    const guestList = firebase.firestore();
    guestList.collection('Visitor Entry').get().then((querySnapshot)=>{
      querySnapshot.docs.forEach(doc => {
        this.state.visitorsList.push(doc.data());
        this.setState({});
      });
    })
    console.log(this.state.visitorsList);
  };

  render () {

    return (
      <div className="App">
        {/* <SignIn click={this.doLogin}/> */}
        <ListGuestLedger tableValues={this.state.visitorsList}/>
      </div>
    );
  }
}

export default App;
