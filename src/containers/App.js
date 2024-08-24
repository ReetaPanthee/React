import React, { PureComponent } from "react";

import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import Aux from "../hoc/Auxx";
import withClass from "../hoc/withClass";

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log("[App.js] Inside Constructor", props);
    this.state = {
      persons: [
        { id: "r12", name: "Reeta", age: 34 },
        { id: "r13", name: "Manu", age: 24 },
        { id: "r14", name: "Stephen", age: 32 },
      ],
      otherState: "Some other value",
      showPersons: false,
      toggleClicked: 0,
    };
  }

  componentDidMount() {
    console.log("[App.js] Inside componentDidMount()");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("[App.js] Inside componentDidUpdate()");
    // Add any logic to run after update here.
  }

  // State change handlers
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => p.id === id);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1,
      };
    });
  };

  render() {
    let persons = null;
    console.log("[App.js] Inside render");

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );
    }

    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showPersons: true });
          }}
        >
          Show Persons
        </button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
        />
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
