import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
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
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
