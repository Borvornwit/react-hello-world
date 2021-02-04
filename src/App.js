import react, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParentComponent />
        {/* <EventBind /> */}
        {/* <FunctionClick />
        <ClassClick /> */}
        {/* <Counter /> */}
        {/* <Message />
        <Greet name="Bruce" heroname="Batman">
          <p>This is children props</p>
        </Greet>
        <Greet name="Clark" heroname="Superman">
          <button>Actions</button>
        </Greet>
        <Greet name="Diana" heroname="Wonder woman" />
        <Welcome name="Bruce" heroname="Batman" />
        <Welcome name="Clark" heroname="Superman" />
        <Welcome name="Diana" heroname="Wonder woman" />
        <Hello /> */}
      </div>
    );
  }
}

export default App;
