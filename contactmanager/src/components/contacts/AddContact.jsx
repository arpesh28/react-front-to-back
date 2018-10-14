import React, { Component } from "react";

class AddContact extends Component {
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  static defaultProps = {
    name: "Yang Ricardo",
    email: "yangricardo@aluno.puc-rio.br",
    phone: "+55 21 99556-0615"
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Insira o nome... "
                defaultValue={name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control form-control-lg"
                placeholder="Insira o email... "
                defaultValue={email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Telefone</label>
              <input
                type="text"
                name="phone"
                className="form-control form-control-lg"
                placeholder="Insira o telefone... "
                defaultValue={phone}
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
