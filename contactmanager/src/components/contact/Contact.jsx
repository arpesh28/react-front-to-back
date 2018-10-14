import React, { Component } from "react";
import { PropTypes } from "prop-types";

class Contact extends Component {
  state = {};

  onShowClick = (id, e) => {
    console.log(id);
  };

  render() {
    const { name, email, phone } = this.props.contact;
    return (
      <div className="container">
        <div className="card card-body mb-3">
          <h4>
            {name}{" "}
            <i
              className="fas fa-sort-down"
              onClick={this.onShowClick.bind(this, name)}
            />
          </h4>
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
