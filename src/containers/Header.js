import { connect } from 'react-redux';

import { register, logIn, logOut, checkSession } from '../ducks/user';
import Header from '../components/Header';

const mapStateToProps = state => ({
  ...state.user
});

const mapDispatchToProps = {
  register,
  logIn,
  logOut,
  checkSession
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
