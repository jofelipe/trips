import Map, { IMap } from 'components/Map';
import LinkWrapper from 'components/LinkWrapper';

import { NextSeo } from 'next-seo';

import * as S from './styles';

import { InfoIcon } from '@primer/octicons-react';

export default function HomeTemplate({ places }: IMap) {
  return (
    <>
      <NextSeo
        title="Trips - Jonathan Felipe"
        description="Um projeto simples para mostrar minhas viagens favoritas pelo mundo."
        canonical="https://trips.jofelipe.com/"
        openGraph={{
          url: 'https://trips.jofelipe.com/',
          title: 'Trips - Jonathan Felipe',
          description:
            'Um projeto simples para mostrar minhas viagens favoritas pelo mundo.',
          images: [
            {
              url: 'https://trips.jofelipe.com/img/opengraph.png',
              width: 1280,
              height: 720,
              alt: 'Trips - Jonathan Felipe'
            }
          ],
          site_name: 'Trips - Jonathan Felipe'
        }}
      />

      <S.Wrapper>
        <LinkWrapper href="/sobre">
          <InfoIcon size={32} aria-label="Sobre" />
        </LinkWrapper>
        <S.Map>
          <Map places={places} />
        </S.Map>
      </S.Wrapper>
    </>
  );
}
