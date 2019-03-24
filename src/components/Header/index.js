import React from 'react';

import { Header, Title, ButtonWrap } from './styles.js';
import Logo from '../Logo';
import Button from '../Button';

class HeaderComponent extends React.Component {
  formData = {
    email: '',
    password: ''
  };

  componentDidMount() {
    this.props.checkSession();
  }

  handleSubmit = event => {
    event.preventDefault();

    if (event.target.checkValidity() === true) {
      this.submitAction(this.formData);
    }
  };

  render() {
    const {
      isLoggedIn,
      user,
      isFetching,
      register,
      logIn,
      openForm
    } = this.props;

    // console.log(this.props);

    return (
      <Header>
        <Logo />
        {isLoggedIn && <Title>Hi, {user}</Title>}

        <ButtonWrap>
          {isLoggedIn ? (
            <Button onClick={this.props.logOut} disabled={isFetching}>
              logout
            </Button>
          ) : (
            <React.Fragment>
              <Button
                onClick={() => {
                  // this.formData.email = `poops-${Date.now()}@xxxx.com`;
                  // this.formData.password = 'magicfactory';
                  openForm(register);
                }}
                disabled={isFetching}
              >
                register
              </Button>
              <Button
                onClick={() => {
                  // this.formData.email = 'poops-1553339017510@xxxx.com';
                  // this.formData.password = 'magicfactory';
                  openForm(logIn);
                }}
                disabled={isFetching}
              >
                login
              </Button>
            </React.Fragment>
          )}
        </ButtonWrap>
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
