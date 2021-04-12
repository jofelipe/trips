import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: var(--large);
`;

export const Content = styled.section`
  max-width: var(--container);
  margin: auto;
  padding: var(--medium) 0;

  h1 {
    color: var(--primary);
    font-size: var(--large);
    margin-bottom: var(--medium);
  }

  p {
    margin-bottom: var(--medium);
  }
`;

export const Gallery = styled.div`
  display: grid;
  grid-gap: var(--medium);

  img {
    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #444 0%,
      #666 20%,
      #444 40%,
      #444 100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;
    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
  }
`;
