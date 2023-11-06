import React from 'react';
import PropTypes from 'prop-types';

const CustomInput = (props) => {
    const { type, name, placeholder, className } = props;
    return (
        <div>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className={`form-control ${className}`}
            />
        </div>
    );
};

CustomInput.propTypes = {
    type: PropTypes.string.isRequired, // Define the expected PropTypes for 'type'
    name: PropTypes.string.isRequired, // Define the expected PropTypes for 'name'
    placeholder: PropTypes.string, // Define the expected PropTypes for 'placeholder'
    className: PropTypes.string, // Define the expected PropTypes for 'className'
};

export default CustomInput;
