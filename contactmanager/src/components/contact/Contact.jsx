import React, { Component } from "react";
import { PropTypes } from "prop-types";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onDeleteClick = () => {
    this.props.onDeleteClickHandler();
  };

  render() {
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <div className="container">
        <div className="card card-body mb-3">
          <h4>
            {name}{" "}
            <i
              className="fas fa-sort-down"
              style={{ cursor: "pointer" }}
              onClick={() =>
                this.setState({ showContactInfo: !this.state.showContactInfo })
              }
            />
            <i
              className="fas fa-times"
              /* cursor:'pointer' indica o comportamento do cursor, usabilidade para representar um objeto clicável */
              style={{ cursor: "pointer", float: "right", color: "red" }}
              onClick={this.onDeleteClick}
            />
          </h4>
          {showContactInfo ? (
            <ul className="list-group">
              <li className="list-group-item">Email: {email}</li>
              <li className="list-group-item">Phone: {phone}</li>
            </ul>
          ) : null}
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  onDeleteClickHandler: PropTypes.func.isRequired
};

export default Contact;
