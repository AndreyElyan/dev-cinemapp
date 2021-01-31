/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import { ButtonStyles, TButton } from './styles';

const Button: React.FC<TButton> = ({
  children,
  width,
  onClick,
  type,
}) => (
  <ButtonStyles width={width} onClick={onClick} type={type}>
    {children}
  </ButtonStyles>
);

Button.propTypes = {
  width: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset', undefined]),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'submit',
  onClick: undefined,
};

export default Button;
