import React, { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log("[Persons.js] Inside Constructor", props);
  }

  componentDidMount() {
    console.log("[Persons.js] Inside componentDidMount()");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("[Persons.js] Inside componentDidUpdate()");
    // Add any logic to run after update here.
  }

  componentWillUnmount() {
    console.log("[Persons.js] Inside componentWillUnmount()");
  }

  render() {
    console.log("[Persons.js] Inside render()");
    return this.props.persons.map((person, index) => (
      <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        position={index}
        age={person.age}
        key={person.id}
        changed={(event) => this.props.changed(event, person.id)}
      />
    ));
  }
}

export default Persons;
