import styled from 'styled-components/macro';

import { breakpoints } from '../../utils/variables';

export const ListItem = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1rem;

  @media (min-width: ${breakpoints.small}px) {
    width: ${100 / 2}%;
  }

  @media (min-width: ${breakpoints.medium}px) {
    width: ${100 / 3}%;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  padding: 0 0.5rem;
`;

export const Title = styled.div`
  position: absolute;
  bottom: 0;
  background: rgba(255, 255, 255, 0.75);
  padding: 0.5rem;
`;
