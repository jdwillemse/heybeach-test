import React from 'react';

import { ListItem, Image, Title } from './styles.js';

const BeachItemComponent = ({ url, name, _id }) => {
  return (
    <ListItem>
      <Image
        src={`//techtest.lab1886.io:3000/${url}`}
        alt={name}
        aria-labelledby={_id}
      />
      <Title id={_id}>{name}</Title>
    </ListItem>
  );
};

export default BeachItemComponent;
