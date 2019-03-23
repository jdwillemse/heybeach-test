import React, { Component } from 'react';

import { List } from './styles.js';
import BeachItem from '../BeachItem';

class BeachListComponent extends Component {
  componentDidMount() {
    this.props.fetchList();
  }

  render() {
    return (
      <List>
        {this.props.beaches.map(beach => (
          <BeachItem {...beach} key={beach._id} />
        ))}
      </List>
    );
  }
}

export default BeachListComponent;
