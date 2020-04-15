import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
// import UserOutput from '../UserOutput/UserOutput';
// import UserInput from '../UserInput/UserInput';
// import Validation from '../Validation/Validation';
// import Char from '../old/old/Char/Char';

import Cockpit from '../components/Cockpit/Cockpit';

//import ErrorBoundary from '../old/old/ErrorBoundary'

//import Radium, {StyleRoot} from 'radium';
//import styled from 'styled-components';

// const StyledButton = styled.button`
//   background-color: ${props => props.alt ? 'red' : 'green'};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;

//   &:hover {
//     background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//     color: black;
//   }`;

class App extends Component {
  state = {
    persons: [
      { id: '123', name: 'Espen', age: 23},
      { id: 'asd', name: 'Live', age: 22},
      { id: '1d1', name: 'Leon', age: 15}
    ],
    otherState: 'some other value',
    showPersons: false,

    userName: 'Espen L',

    userInput: ''
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

  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value});
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index,1);
    const updatedText = text.join('');
    this.setState({userInput : updatedText})
  }

  render() {
  //   const style = {
  //     backgroundColor: 'green',
  //     color: 'white',
  //     font: 'inherit',
  //     border: '1px solid blue',
  //     padding: '8px',
  //     cursor: 'pointer',
  //     ':hover': {
  //       backgroundColor: 'lightgreen',
  //       color: 'black'
  //     }
  // };

    let persons = null;

    if (this.state.showPersons) {
      persons =
   
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />;

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor : 'salmon',
      //   color: 'black'
      // };
    }

    // const charList = this.state.userInput.split('').map((ch, index) => {
    //   return <Char 
    //     character = {ch} 
    //     key={index}
    //     clicked={() => this.deleteCharHandler(index)}/>;
    // });

    return (
      //<StyleRoot>
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}/>
        {persons}
      </div>

      //   <UserInput 
      //     changed={this.userNameChangedHandler}
      //     currentName={this.state.userName}/>
      //   <UserOutput userName={this.state.userName}/>
      //   <UserOutput userName="Live"/>
        
      //   <input 
      //   type="text" 
      //   onChange={this.inputChangedHandler} 
      //   value={this.state.userInput} />
      //   <p>{this.state.userInput}</p>
      //   <Validation inputLength={this.state.userInput.length}/>
        
      //   {charList}
        
      // </div>
     //</StyleRoot>
    );
  }
}

export default App;
//export default Radium(App);

