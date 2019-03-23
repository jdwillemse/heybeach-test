import styled from 'styled-components/macro';

export const Fieldset = styled.fieldset`
  margin: 0 1.5rem 0 0;
  padding: 0;
  border: none;
  display: inline-block;
`;

export const Label = styled.label`
  margin: 0 1rem 0 0;
`;

export const Input = styled.input`
  display: inline-block;
  padding: 1rem;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  border: none;
  box-shadow: inset 0 0 1px rgba(120, 120, 120, 1);

  /* transition: background 250ms ease-in-out, transform 150ms ease; */

  &:hover,
  &:focus {
  }

  &:focus {
    outline: 1px solid blue;
    outline-offset: -1px;
  }

  &:active {
    /* transform: scale(0.95); */
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
