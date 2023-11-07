import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BreadCrumb = (props) => {
    const { title } = props;
    
    return (
        <div className="breadcrumb py-4">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <p>
                            <Link to="/" className="text-dark">Home &nbsp;</Link> / {title}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

BreadCrumb.propTypes = {
    title: PropTypes.string, // Define the expected PropTypes for 'title'
};

export default BreadCrumb;
