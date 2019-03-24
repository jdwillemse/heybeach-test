import styled from 'styled-components/macro';

import { breakpoints } from '../../utils/variables';

export const FormWrap = styled.div`
  position: relative;
  margin: 2rem;

  @media (min-width: ${breakpoints.small}px) {
    max-width: 576px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: ${breakpoints.medium}px) {
    max-width: initial;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: ${breakpoints.medium}px) {
      flex-direction: row;
    }
  }
`;

export const Error = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  background: rgba(255, 0, 0, 0.2);
`;
