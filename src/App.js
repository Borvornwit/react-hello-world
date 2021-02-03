import react, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Mycomponents from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Mycomponents />
        <Welcome /> */}
        <Hello />
      </div>
    );
  }
}

export default App;
