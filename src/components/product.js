import React from 'react';
import PropTypes from 'prop-types';

Product.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number,
};

export default Product;
