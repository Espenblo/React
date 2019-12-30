import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Espen', age: 23},
      { name: 'Live', age: 22}
    ]
  });

  const [otherState, setOtherState] = useState('Some other value');

console.log(personsState, otherState);

 const switchNameHandler = () => {
  // DONT DO THIS: this.state.persons[0].name="Max"
  setPersonsState( { 
    persons:  [
      { name: 'Espen Løvhaugen', age: 23},
      { name: 'Live', age: 22}
    ],
    otherState: personsState.otherState
  
  });
};
 
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}> My hobbies: Racing</Person>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}></Person>
      </div>
    );
}

export default app;