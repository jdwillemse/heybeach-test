import { connect } from 'react-redux';

import { register, logIn, logOut, checkSession } from '../ducks/user';
import { openForm } from '../ducks/form';
import Header from '../components/Header';

const mapStateToProps = state => ({
  ...state.user
});

const mapDispatchToProps = {
  register,
  logIn,
  logOut,
  checkSession,
  openForm
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
