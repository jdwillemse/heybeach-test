import { connect } from 'react-redux';

import { fetchList } from '../ducks/beaches';
import BeachList from '../components/BeachList';

const mapStateToProps = state => ({
  ...state.beaches
});

const mapDispatchToProps = { fetchList };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeachList);
