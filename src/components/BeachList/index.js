import React, { Component } from 'react';

import { List } from './styles.js';
import BeachItem from '../BeachItem';

class BeachListComponent extends Component {
  componentDidMount() {
    this.props.fetchList();
  }

  render() {
    const { beaches } = this.props;
    const len = beaches.length;
    const beachHolder = [[], [], []];
    for (let i = 0; i <= len; i++) {
      beachHolder[i % 3].push(i);
    }

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
