import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  onNameChange = e => this.setState({ name: e.target.value });
  onEmailChange = e => this.setState({ email: e.target.value });
  onPhoneChange = e => this.setState({ phone: e.target.value });

  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Insira o nome... "
                value={name}
                onChange={this.onNameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control form-control-lg"
                placeholder="Insira o email... "
                value={email}
                onChange={this.onEmailChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Telefone</label>
              <input
                type="text"
                name="phone"
                className="form-control form-control-lg"
                placeholder="Insira o telefone... "
                value={phone}
                onChange={this.onPhoneChange}
              />
            </div>
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
