import react, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Mycomponents from './components/Greet';
import Welcome from './components/Welcome';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Mycomponents />
        <Welcome />
      </div>
    );
  }
}

export default App;
