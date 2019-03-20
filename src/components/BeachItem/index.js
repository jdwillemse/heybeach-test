import React from 'react';

import { ListItem, Image } from './styles.js';

const BeachItemComponent = ({ url }) => {
  return (
    <ListItem>
      <Image src={`//techtest.lab1886.io:3000/${url}`} alt="" />
    </ListItem>
  );
};

export default BeachItemComponent;
