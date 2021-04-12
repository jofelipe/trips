import styled from 'styled-components';

export const Wrapper = styled.section``;

export const Map = styled.div`
  width: 100%;
  height: 100vh;

  .gm-style iframe + div {
    border: 0 !important;
  }

  .gmnoprint,
  .gm-style-cc {
    display: none;
  }
`;
