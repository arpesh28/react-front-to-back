import React, { Component } from "react";
import { Consumer } from "../../providers/Context";
import uuid from "uuid";
import TextInputGroup from "../layout/TextInputGroup";
class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    // Create Contact object
    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    };
    // call Context API Add Contact action
    dispatch({ type: "ADD_CONTACT", payload: newContact });

    // Clear Form Fields
    this.setState({
      name: "",
      email: "",
      phone: ""
    });
  };

  render() {
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Nome"
                    name="name"
                    placeholder="Insira o nome... "
                    value={name}
                    onChange={this.onChange}
                  />
                  <TextInputGroup
                    label="Telefone"
                    name="phone"
                    placeholder="Insira o Telefone... "
                    value={phone}
                    onChange={this.onChange}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Insira o email... "
                    value={email}
                    onChange={this.onChange}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
