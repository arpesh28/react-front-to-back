import React, { Component } from "react";

import Contact from "../contact/Contact";

class Contacts extends Component {
  state = {
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

  deleteContact = id => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: newContacts });
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            onDeleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
