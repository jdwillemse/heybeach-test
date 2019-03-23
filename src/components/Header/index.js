import React from 'react';

import { Header, FormWrap, ButtonWrap, Button } from './styles.js';
import Input from '../Input';

class HeaderComponent extends React.Component {
  state = {
    showForm: false
  };

  formData = {
    email: '',
    password: ''
  };

  componentDidMount() {
    this.props.checkSession();
  }

  handleInput = input => {
    this.formData = {
      ...this.formData,
      ...input
    };
  };

  toggleForm = submitAction => {
    this.submitAction = submitAction;
    this.setState({ showForm: true });
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log('handleSubmit', this.submitAction, this.formData);

    this.submitAction(this.formData);
    delete this.submitAction;

    this.setState({ showForm: false });
  };

  render() {
    const { isLoggedIn, user, error, isFetching, register, logIn } = this.props;
    const { showForm } = this.state;

    console.log(this.props);

    return (
      <Header>
        {error && <h2>{error}</h2>}
        <h1>{isLoggedIn ? `Hi, ${user}` : 'Welcome'}</h1>

        <ButtonWrap leave={showForm}>
          {isLoggedIn ? (
            <Button
              onClick={this.props.logOut}
              type="button"
              disabled={isFetching}
            >
              logout
            </Button>
          ) : (
            <React.Fragment>
              <Button
                onClick={() => {
                  // this.formData.email = `poops-${Date.now()}@xxxx.com`;
                  // this.formData.password = 'magicfactory';
                  this.toggleForm(register);
                }}
                type="button"
                disabled={isFetching}
              >
                register
              </Button>
              <Button
                onClick={() => {
                  // this.formData.email = 'poops-1553339017510@xxxx.com';
                  // this.formData.password = 'magicfactory';
                  this.toggleForm(logIn);
                }}
                type="button"
                disabled={isFetching}
              >
                login
              </Button>
            </React.Fragment>
          )}
        </ButtonWrap>

        <FormWrap enter={showForm}>
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
              onChange={this.handleInput}
            />
            <Button>Submit</Button>
          </form>
        </FormWrap>
      </Header>
    );
  }
}

export default HeaderComponent;

// curl -X POST -H "Content-Type: application/json" -H "Cache-Control: no-cache" -d '{
//   "email":"user1874675367812@xxxx.com",
//   "password":"password"
// }
// ' "http://techtest.lab1886.io:3000/user/register"

// curl -X POST -H "Content-Type: application/json" -H "Cache-Control: no-cache"  -d '{
//   "email":"user1874675367812@xxxx.com",
//   "password":"password"
// }
// ' "http://techtest.lab1886.io:3000/user/login"
