import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Espen', age: 23},
      { name: 'Live', age: 22}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // DONT DO THIS: this.state.persons[0].name="Max"
    this.setState( { 
      persons:  [
        { name: newName, age: 23},
        { name: 'Live', age: 22}
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( { 
      persons:  [
        { name: 'Espen', age: 23},
        { name: event.target.value, age: 22}
      ]
    } )
  }

  togglePersonHandler= () => {
    const doesShow =this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
         style={style}
         onClick={this.togglePersonHandler}>Toggle Persons</button>
        {
         this.state.showPersons === true ? 
            <div>
              <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              click={this.switchNameHandler.bind(this, 'Espen Birkeland')}>My hobbies: Racing</Person>
              <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              changed={this.nameChangedHandler}></Person>
            </div> : null
        }
        
      </div>
    );
  }
}

export default App;
