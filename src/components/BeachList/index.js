import React, { Component } from 'react';
import { Waypoint } from 'react-waypoint';

import { List } from './styles.js';
import BeachItem from '../BeachItem';

const LAZYLOAD_OFFSET = 100;

class BeachListComponent extends Component {
  componentDidMount() {
    this.props.fetchList();
    setTimeout(this.scrollHandler, 500);

    window.addEventListener('scroll', this.scrollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler);
  }

  scrollHandler = () => {
    const { scrollTop } = document.documentElement;
    const lazyloadTarget =
      document.documentElement.scrollHeight -
      window.innerHeight -
      LAZYLOAD_OFFSET;

    if (scrollTop >= lazyloadTarget || lazyloadTarget <= 0) {
      this.props.fetchList();
    }
  };

  render() {
    const { beaches, isFetching } = this.props;

    return (
      <React.Fragment>
        <List>
          {beaches.map(beach => (
            <BeachItem {...beach} key={beach._id} />
          ))}
        </List>
        {isFetching && <div>Loading…</div>}
      </React.Fragment>
    );
  }
}

export default BeachListComponent;
