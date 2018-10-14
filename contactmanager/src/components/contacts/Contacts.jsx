import React, { Component } from "react";

import Contact from "../contact/Contact";
import { Consumer } from "../../providers/contact";

class Contacts extends Component {
  deleteContact = id => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: newContacts });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              {contacts.map(contact => (
                <Contact
                  key={contact.id}
                  contact={contact}
                  onDeleteClickHandler={this.deleteContact.bind(
                    this,
                    contact.id
                  )}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
