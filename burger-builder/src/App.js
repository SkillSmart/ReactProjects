import React, { Component } from 'react';
import Radium from 'radium';
import './App.css';

import Person from './Components/Person/Person';

class App extends Component {
  state = {
    persons: [
      {id:"123a", name:"Max",age:28},
      {id:"123b", name: "Frank", age:35},
      {id:"123c", name: "Claudia", age:30}
    ],
    showTeammembers: false,
  };
  // Set Styles for the Elements
  //Toggle Button
  style_toggleBtn = {
    backgroundColor: "green",
    color: "white",
    padding: "15px",
    font: "inherit",
    margin: "10px",
    cursor: 'pointer',
    ":hover": {
      backgroundColor: "lightgreen",
      color: "black",
    }
  }

  togglePersonsHandler = (event) => {
    const showMembers = this.state.showTeammembers;
    this.setState({showTeammembers: !showMembers});
  };

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index,1);
    this.setState({persons})
  };

  changeNameHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === personId;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    // Update the state array
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons});
  };

  render() {

    // Conditionally render the TeamMember Section to the page
    let persons = null;
    if (this.state.showTeammembers){
      
      persons = (
        <div className="TeammemberShowcase">
          {this.state.persons.map( (person, index) => {
            return <Person key={person.id}
              name={person.name}
              age={person.age}
              click={this.deletePersonHandler.bind(this, index)}
              changeName={(event) => {this.changeNameHandler(event, person.id)}}/>
          })};
        </div>
      );
      // Adapt the styling for the button when pressed
      this.style_toggleBtn.backgroundColor = "red";
      this.style_toggleBtn[":hover"] = {
        backgroundColor : "salmon",
        color: "black",
        border: "1px solid grey"
      }
    }
    

    return (
      <div className="App">
        <h1>Our Team Display</h1>
        <button style={this.style_toggleBtn} onClick={this.togglePersonsHandler}>Show Teammembers</button>
        {persons} 

        <div>
          Test div
        </div>
      </div>
    );
  }
}

export default Radium(App);
