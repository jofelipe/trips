import Image from 'next/image';
import LinkWrapper from 'components/LinkWrapper';

import { useRouter } from 'next/dist/client/router';
import { NextSeo } from 'next-seo';

import { XCircleIcon } from '@primer/octicons-react';

import * as S from './styles';

type IImage = {
  url: string;
  width: number;
  height: number;
};

export type IPlaceTemplate = {
  place: {
    slug: string;
    name: string;
    description?: {
      html: string;
      text: string;
    };
    gallery: IImage[];
    bucketlist: boolean;
  };
};

export default function PlaceTemplate({ place }: IPlaceTemplate) {
  const router = useRouter();

  if (router.isFallback) {
    return null;
  }

  if (place.bucketlist) {
    return null;
  }

  return (
    <>
      <NextSeo
        title={`${place.name} - Trips - Jonathan Felipe`}
        description={place.description?.text}
        canonical="https://trips.jofelipe.com/"
        openGraph={{
          url: 'https://trips.jofelipe.com/',
          title: `${place.name} - Trips - Jonathan Felipe`,
          description: place.description?.text,
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: place.name
            }
          ]
        }}
      />

      <LinkWrapper href="/">
        <XCircleIcon size={32} aria-label="Voltar para o mapa" />
      </LinkWrapper>

      <S.Wrapper>
        <S.Content>
          <h1>{place.name}</h1>
          <article
            dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
          />
          <S.Gallery>
            {place.gallery.map((image, index) => (
              <Image
                key={index}
                src={image.url}
                alt={place.name}
                width={image.width}
                height={image.height}
                quality={75}
              />
            ))}
          </S.Gallery>
        </S.Content>
      </S.Wrapper>
    </>
  );
}
