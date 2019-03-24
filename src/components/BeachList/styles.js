import styled from 'styled-components/macro';

import { breakpoints } from '../../utils/variables';

export const List = styled.div`
  margin: 0 2rem;
  columns: 1;
  column-gap: 1rem;

  @media (min-width: ${breakpoints.small}px) {
    columns: 2;
  }

  @media (min-width: ${breakpoints.medium}px) {
    columns: 3;
  }
`;
