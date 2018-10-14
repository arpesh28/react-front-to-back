import React from 'react';
import { PropTypes } from 'prop-types';


function TextInputGroup = ({
    label,
    name,
    value,
    placeholder,
    type,
    onChange
}) => {
    return (
        <div className="form-group">
                    <label htmlFor="{name}">{label}</label>
                    <input
                      type={type}
                      name={name}
                      className="form-control form-control-lg"
                      placeholder={place}
                      value={name}
                      onChange={this.onChange}
                    />
                  </div>
  )
}

TextInputGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

TextInputGroup.defaultProps = {
    type: 'text'
}

export default  TextInputGroup;