import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './styles.js';

const ButtonComponent = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

/**
 * Click callback is only required if the button has type button. Submit buttons can optionally have callbacks.
 * @param {object} props - component props
 * @return {error} - return an error if conditions not met
 */
export const onClickValidation = ({ onClick, type }) => {
  if ((!type || type === 'button') && typeof onClick === 'undefined') {
    return new Error('When button type is NOT submit onClick is required');
  }
  return null;
};

ButtonComponent.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: onClickValidation,
  type: PropTypes.string,
  disabled: PropTypes.bool
};

ButtonComponent.defaultProps = {
  type: 'button',
  disabled: false
};

export default ButtonComponent;
