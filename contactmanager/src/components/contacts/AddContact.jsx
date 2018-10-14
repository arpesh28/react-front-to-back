import React, { Component } from "react";
import { Consumer } from "../../providers/Context";
import uuid from "uuid";
import TextInputGroup from "../layout/TextInputGroup";
class AddContact extends Component {
  state = {
    addContact: false,
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    // Check for errors
    if (name === "") {
      this.setState({ errors: { name: "Name é obrigatório" } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "Telefone é obrigatório" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "Email é obrigatório" } });
      return;
    }

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
      phone: "",
      errors: {}
    });
  };

  render() {
    const { name, email, phone, errors } = this.state;
    const { addContact } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="card mb-3">
              <div
                className="card-header"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  this.setState({
                    addContact: !this.state.addContact
                  })
                }
              >
                <i
                  class="fas fa-address-card"
                  style={{
                    cursor: "pointer",
                    float: "left",
                    color: "#076BFF"
                  }}
                />{" "}
                Add Contact
              </div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Nome"
                    name="name"
                    placeholder="Insira o nome... "
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Telefone"
                    name="phone"
                    placeholder="Insira o Telefone... "
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Insira o email... "
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
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

{
  /* <i
                  className={
                    "fas fa-" + (addContact ? "minus" : "plus") + "-circle"
                  }
                  style={{
                    cursor: "pointer",
                    float: "right",
                    color: "#076BFF"
                  }}
                /> 
              {addContact ? (: null} */
}
