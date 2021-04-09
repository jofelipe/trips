import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  z-index: 1100;
  top: var(--medium);
  right: var(--medium);
  color: var(--text);
  cursor: pointer;

  svg {
    transition: color 0.1s linear;
  }

  &:hover {
    color: var(--primary);
  }
`;
