import styled from 'styled-components/macro';

import { breakpoints } from '../../utils/variables';

export const Fieldset = styled.fieldset`
  margin: 0 0 1rem;
  padding: 0;
  border: none;
  display: block;
  text-align: left;

  @media (min-width: ${breakpoints.medium}px) {
    margin-right: 1.5rem;
    margin-bottom: 0;
    display: inline-block;
  }
`;

export const Label = styled.label`
  margin: 0 0 0.5rem 0;
  display: block;

  @media (min-width: ${breakpoints.medium}px) {
    display: inline;
    margin: 0 1rem 0 0;
  }
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 1rem;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  border: none;
  box-shadow: inset 0 0 1px rgba(120, 120, 120, 1);

  &:focus {
    outline: 1px solid blue;
    outline-offset: -1px;
  }

  @media (min-width: ${breakpoints.medium}px) {
    display: inline-block;
    width: auto;
  }
`;
