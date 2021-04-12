import Image from 'next/image';
import LinkWrapper from 'components/LinkWrapper';

import { XCircleIcon } from '@primer/octicons-react';

import * as S from './styles';
import { useRouter } from 'next/dist/client/router';

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
                width={1000}
                height={600}
                quality={75}
              />
            ))}
          </S.Gallery>
        </S.Content>
      </S.Wrapper>
    </>
  );
}
