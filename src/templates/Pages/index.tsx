import LinkWrapper from 'components/LinkWrapper';

import { NextSeo } from 'next-seo';

import { XCircleIcon } from '@primer/octicons-react';

import * as S from './styles';

export type IPageTemplate = {
  heading: string;
  body: string;
};

const PageTemplate = ({ heading, body }: IPageTemplate) => (
  <>
    <NextSeo
      title={`${heading} - Trips - Jonathan Felipe`}
      description="Um projeto simples para mostrar minhas viagens favoritas pelo mundo."
      canonical="https://trips.jofelipe.com/"
      openGraph={{
        url: 'https://trips.jofelipe.com/',
        title: `${heading} - Trips - Jonathan Felipe`,
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

    <LinkWrapper href="/">
      <XCircleIcon size={32} aria-label="Voltar para o mapa" />
    </LinkWrapper>

    <S.Wrapper>
      <S.Heading>{heading}</S.Heading>
      <S.Body>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </S.Body>
    </S.Wrapper>
  </>
);

export default PageTemplate;
