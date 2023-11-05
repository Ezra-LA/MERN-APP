import React from "react";
import PropTypes from 'prop-types';

const Container = (props) => {
  return (
    <section className={props.class1}>
      <div className="container-xxl">{props.children}</div>
    </section>
  );
};

Container.propTypes = {
  class1: PropTypes.string, // Define the expected PropTypes for 'class1'
  children: PropTypes.node, // You can add this if you expect children components
};

export default Container;
