import React from 'react';
import PropTypes from 'prop-types';

const CustomInput = (props) => {
    const { type, name, placeholder, className, value, onChange, onBlur } = props;
    return (
        <div>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className={`form-control ${className}`}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
        </div>
    );
};

// Define PropTypes for your component to catch potential bugs or mistakes
CustomInput.propTypes = {
    type: PropTypes.string.isRequired, // Expect 'type' to be a required string
    name: PropTypes.string.isRequired, // Expect 'name' to be a required string
    placeholder: PropTypes.string, // 'placeholder' is optional and should be a string
    className: PropTypes.string, // 'className' is optional and should be a string
    value: PropTypes.any, // 'value' is optional and can be of any type
    onChange: PropTypes.func, // 'onChange' is optional and should be a function
    onBlur: PropTypes.func, // 'onBlur' is optional and should be a function
};

export default CustomInput;
