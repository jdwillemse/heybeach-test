import React from 'react';

import { FormWrap, Error } from './styles.js';
import Input from '../Input';
import Button from '../Button';

class FormComponent extends React.Component {
  formData = {
    email: '',
    password: ''
  };

  toggleForm = submitAction => {
    this.submitAction = submitAction;
    this.setState({ showForm: true });
  };

  handleInput = input => {
    this.formData = {
      ...this.formData,
      ...input
    };
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log('handleSubmit', this.submitAction, this.formData);

    if (event.target.checkValidity() === true) {
      this.props.submitAction(this.formData);

      // this.setState({ showForm: false });
    }
  };

  render() {
    const { isFormOpen, error } = this.props;

    console.log(this.props);

    return (
      <FormWrap>
        {error && <Error>{error}</Error>}
        {isFormOpen && (
          <form onSubmit={this.handleSubmit}>
            <Input
              label="Email"
              name="email"
              type="email"
              onChange={this.handleInput}
            />
            <Input
              label="Password"
              name="password"
              minLength="6"
              onChange={this.handleInput}
            />
            <Button type="submit">Submit</Button>
          </form>
        )}
      </FormWrap>
    );
  }
}

export default FormComponent;
