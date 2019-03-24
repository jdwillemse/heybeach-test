import React from 'react';

import { LogoWrap, Image } from './styles.js';
import logo from '../../assets/heybeach.png';

const BeachItemComponent = ({ url }) => {
  return (
    <LogoWrap>
      <Image src={logo} alt="HeyBeach logo" />
    </LogoWrap>
  );
};

export default BeachItemComponent;
