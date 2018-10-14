import React, { Component } from "react";

import Contact from "../contact/Contact";

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: "Yang Ricardo Barcellos Miranda",
          email: "yang@mail.com",
          phone: "995560615"
        },
        {
          id: 2,
          name: "Ricardo Barcellos Miranda",
          email: "ricardo@mail.com",
          phone: "995650615"
        },
        {
          id: 3,
          name: "Vera Lúcia Alves de Oliveira",
          email: "vera@mail.com",
          phone: "995560620"
        }
      ]
    };
  }

  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
          />
        ))}
      </div>
    );
  }
}

export default Contacts;
