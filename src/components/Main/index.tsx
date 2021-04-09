import Map from 'components/Map';
import LinkWrapper from 'components/LinkWrapper';

import * as S from './styles';

import { InfoIcon } from '@primer/octicons-react';

const Main = () => (
  <S.Wrapper>
    <LinkWrapper href="/about">
      <InfoIcon size={32} aria-label="Sobre" />
    </LinkWrapper>
    <S.Map>
      <Map />
    </S.Map>
  </S.Wrapper>
);

export default Main;
