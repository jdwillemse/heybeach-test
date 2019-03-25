import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

import { ListWrap } from './styles.js';
import BeachItem from '../BeachItem';

const LAZYLOAD_OFFSET = 100;

const masonryOptions = {
  transitionDuration: 0
};

class BeachListComponent extends Component {
  componentDidMount() {
    this.props.fetchList();
    // quick hack to make sure the list actually reavhes the bottom of the page
    // this should be done on masonry layout complete event
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
      <ListWrap>
        <Masonry options={masonryOptions}>
          {beaches.map(beach => (
            <BeachItem {...beach} key={beach._id} />
          ))}
        </Masonry>
        {isFetching && <div>Loading…</div>}
      </ListWrap>
    );
  }
}

export default BeachListComponent;
