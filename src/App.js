import React, { Component } from 'react';
import './App.scss';
import JokeGenerator from './Components/JokeGenerator/index';
import Favorite from './Components/Favorite/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="site-title">Chuck's killing jokes</h1>
        </header>
        <main className="page">
          <div className="wrapper">
            <JokeGenerator />
            <Favorite />
          </div>
        </main>
        <footer className="footer"><p className="footer-content">Powered by <a className="chuck-link" href="https://api.chucknorris.io/"> chucknorris.io<img className="chuck-logo" src="https://assets.chucknorris.host/img/avatar/chuck-norris.png" alt="" /></a></p> </footer>
      </div>
    );
  }
}

export default App;
