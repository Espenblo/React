import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Espen', age: 23},
      { name: 'Live', age: 22}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    // DONT DO THIS: this.state.persons[0].name="Max"
    this.setState( { 
      persons:  [
        { name: 'Espen Løvhaugen', age: 23},
        { name: 'Live', age: 22}
      ]
    
    } )
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}> My hobbies: Racing</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
      </div>
    );
  }
}

export default App;
