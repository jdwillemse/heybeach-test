import styled from 'styled-components/macro';

const transitionSpeed = '0.3s';
const transitionDelay = '0.2s';

export const Header = styled.header`
  position: relative;
  margin: 2rem;
`;

export const ButtonWrap = styled.div`
  position: 'relative';
  margin: 1rem;
  transform: translate3d(0, ${({ leave }) => (leave ? '-50%' : '0')}, 0);
  opacity: ${({ leave }) => (leave ? '0' : '1')};
  transition: transform ${transitionSpeed} ease-in-out,
    opacity ${transitionSpeed};
  transition-delay: ${({ leave }) => (leave ? '0' : transitionDelay)};
`;

export const FormWrap = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 1rem;
  margin-bottom: 0;
  transform: translate3d(0, ${({ enter }) => (enter ? '0' : '50%')}, 0);
  opacity: ${({ enter }) => (enter ? '1' : '0')};
  transition: transform ${transitionSpeed} ease-in-out,
    opacity ${transitionSpeed} ease-in;
  transition-delay: ${({ enter }) => (enter ? transitionDelay : '0')};
  pointer-events: ${({ enter }) => (enter ? 'auto' : 'none')};
`;

export const Button = styled.button`
  display: inline-block;
  border: none;
  padding: 1rem 2rem;
  margin: 0;
  text-decoration: none;
  background: #0069ed;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  appearance: none;

  &:hover,
  &:focus {
    background: #0053ba;
  }

  &:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    background: #ddd;
    cursor: not-allowed;
  }
`;
