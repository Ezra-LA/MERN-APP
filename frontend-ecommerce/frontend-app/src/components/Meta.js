import { Helmet } from "react-helmet";
import React from "react";
import PropTypes from 'prop-types';

const Meta = (props) => {
    return (
        <Helmet>
            <meta charSet="utf-8"/>
            <title>{props.title}</title>
        </Helmet>
    );
};

Meta.propTypes = {
    title: PropTypes.string.isRequired, // Define the expected PropTypes for 'title'
};

export default Meta;
