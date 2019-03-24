import { connect } from 'react-redux';

import { openForm } from '../ducks/form';
import Form from '../components/Form';

const mapStateToProps = state => ({
  ...state.form,
  error: state.user.error
});

const mapDispatchToProps = {
  openForm
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
