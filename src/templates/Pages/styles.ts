import styled from 'styled-components';

export const Wrapper = styled.section`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  max-width: var(--container);
  margin: auto;
`;

export const Heading = styled.h1`
  color: var(--primary);
  font-size: var(--large);
  margin-bottom: var(--medium);
`;

export const Body = styled.article`
  p {
    margin-bottom: var(--large);
  }
`;
