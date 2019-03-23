import React from 'react';
import PropTypes from 'prop-types';

import { Fieldset, Label, Input } from './styles.js';

class InputComponent extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string
  };

  static defaultProps = {
    type: 'text'
  };

  state = {
    [this.props.name]: this.props.value || ''
  };

  handleInput = ({ target }) => {
    const { name, onChange } = this.props;
    const formData = {
      [name]: target.value
    };

    this.setState(formData);
    if (typeof onChange === 'function') {
      onChange(formData);
    }
  };

  render() {
    const { label, name, type, props } = this.props;
    const value = this.state[name];

    return (
      <Fieldset>
        <Label htmlFor={name}>{label}</Label>
        <Input
          {...props}
          type={type}
          id={name}
          name={name}
          onChange={this.handleInput}
          value={value}
        />
      </Fieldset>
    );
  }
}

export default InputComponent;
