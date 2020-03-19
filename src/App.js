import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';


class App extends Component {
  state = {
    persons: [
      { id: '123', name: 'Espen', age: 23},
      { id: 'asd', name: 'Live', age: 22},
      { id: '1d1', name: 'Leon', age: 15}
    ],
    otherState: 'some other value',
    showPersons: false,

    userName: 'Espen L'
  }

  userNameChangedHandler = (event) => {
    this.setState({userName: event.target.value})
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
  
    this.setState( { persons: persons} );
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons})
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

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name = {person.name}
            age = {person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event,person.id)}/>
          })}
      </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
         style={style}
         onClick={this.togglePersonHandler}>Toggle Persons</button>
        
        {persons}

        <UserInput 
          changed={this.userNameChangedHandler}
          currentName={this.state.userName}/>
        <UserOutput userName={this.state.userName}/>
        <UserOutput userName="Live"/>
      </div>
    );
  }
}

export default App;
