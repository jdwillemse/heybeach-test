import styled from 'styled-components/macro';

import { breakpoints } from '../../utils/variables';

export const Header = styled.header`
  display: flex;
  margin: 2rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${breakpoints.small}px) {
    flex-direction: row;
  }
`;

export const ButtonWrap = styled.div``;

export const Title = styled.div`
  margin-bottom: 1rem;

  @media (min-width: ${breakpoints.small}px) {
    margin: 0;
  }
`;
