import LinkWrapper from 'components/LinkWrapper';

import { XCircleIcon } from '@primer/octicons-react';

import * as S from './styles';

const AboutTemplate = () => (
  <S.Wrapper>
    <LinkWrapper href="/">
      <XCircleIcon size={32} />
    </LinkWrapper>

    <S.Heading>Trips</S.Heading>

    <S.Body>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae,
        soluta.
      </p>
    </S.Body>
  </S.Wrapper>
);

export default AboutTemplate;
