import Map, { IMap } from 'components/Map';
import LinkWrapper from 'components/LinkWrapper';

import * as S from './styles';

import { InfoIcon } from '@primer/octicons-react';

export default function HomeTemplate({ places }: IMap) {
  return (
    <S.Wrapper>
      <LinkWrapper href="/sobre">
        <InfoIcon size={32} aria-label="Sobre" />
      </LinkWrapper>
      <S.Map>
        <Map places={places} />
      </S.Map>
    </S.Wrapper>
  );
}
